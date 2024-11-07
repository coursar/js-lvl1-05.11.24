I-JSON - Internet JSON (JavaScript Object Notation)

```json
{
    "id": 1,
    "name": "..."
}
```

```json
[8, 23, "...", {"id": "..."}]
```

1. Object
2. Array
3. String
4. Number
5. Boolean
6. Null

```js
const request = {
    amount: 10_000,
    cardType: 'mir',
};

const json = JSON.stringify(request);
console.log(json);

const parsed = JSON.parse(json);
console.log(parsed);
```