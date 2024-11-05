import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const subscribers = new Set();
const watch = async() => {
    const watcher = fs.watch('.');
    for await (const event of watcher) {
        console.log(event);
        subscribers.forEach(s => s());
    }
};

const mimes = new Map([
    ['.html', 'text/html'],
    ['.css', 'text/css'],
    ['.xml', 'text/xml'],

    ['.js', 'application/javascript'],
    ['.mjs', 'application/javascript'],
    ['.json', 'application/json'],

    ['.svg', 'image/svg+xml'],
    ['.png', 'image/png'],
    ['.jpg', 'image/jpeg'],
    ['.jpeg', 'image/jpg'],
]);

const cors = (next) => (req, res) => {
    const { origin } = req.headers;
    if (!origin) {
        next(req, res);
        return;
    }

    // simple solution. see note for fetch: https://fetch.spec.whatwg.org/#http-new-header-syntax
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    };

    if (req.method !== 'OPTIONS') {
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
        try {
            next(req, res);
            return;
        } catch (e) {
            e.headers = { ...e.headers, ...headers };
            throw e;
        }
    }

    Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
    res.statusCode = 204;
    res.end();
};

const json = (next) => (req, res) => {
    if (!req.headers['content-type']?.startsWith('application/json')) {
        next(req, res);
        return;
    }

    const body = [];
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
        try {
            req.body = JSON.parse(Buffer.concat(body).toString());
            req.bodyType = 'json';
        } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'invalid json' }));
            return;
        }
        next(req, res);
    });
};

const sse = (next) => (req, res) => {
    if (!req.headers['accept']?.startsWith('text/event-stream')) {
        next(req, res);
        return;
    }

    res.statusCode = 200;
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.flushHeaders();

    const subscriber = () => {
        res.write(Buffer.from('event: message\ndata: reload\n\n', 'utf-8'));
    };
    subscribers.add(subscriber);

    req.on('close', () => {
        subscribers.delete(subscriber);
    });
};

const handler = async (req, res) => {
    const filePath = path.normalize(path.join('.', req.url));
    try {
        const stat = await fs.stat(filePath);
        if (!stat.isFile()) {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'forbidden' }));
            return;
        }
    } catch (e) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'not found' }));
        return;
    }

    try {
        const ext = path.extname(filePath);
        const mime = mimes.get(ext) ?? 'application/octet-stream';
        const content = await fs.readFile(filePath);

        res.statusCode = 200;
        res.setHeader('Content-Type', mime);
        res.end(content);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'can\t read file' }));
        return;
    }
};

const server = http.createServer(cors(sse(json(handler))));
server.on('connection', (conn) => {
    conn.pipe(process.stdout);
});
const port = process.argv[2] ?? 9999;
server.listen(port, () => {
    console.log(`server started on localhost:${port}`);
    watch();
});