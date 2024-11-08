// webpack, ro*
(() => {
    // TODO:
    // 0. from server data
    // 1. ref to root element (container) div[data-id=posts]
    // 2. create children inside container
    // 2.1. create element
    // 2.2. container.appendChild, container.append

    const posts = [
        {
            id: 1,
            name: 'Преступление и наказание',
            image: 'https://placehold.co/200x100',
            likes: 0,
        },
        {
            id: 2,
            name: 'Татьяна',
            image: 'https://placehold.co/200x100',
            likes: 0,
        },
        {
            id: 3,
            name: 'Элементарно',
            image: 'https://placehold.co/200x100',
            likes: 2,
        },
    ];

    // Component => Web Component, React -> React Component

    const PostCard = function(post) {
        const divEl = document.createElement('div');

        // bad code for trusted data
        // divEl.innerHTML = `
        //     <img src=${post.image}>
        //     <div>
        //         <p>${post.name}</p>
        //     </div>
        // `;

        const imgEl = document.createElement('img');
        imgEl.src = post.image;
        divEl.append(imgEl);

        const pEl = document.createElement('p');
        pEl.textContent = post.name;
        // const nameNode = document.createTextNode(post.name);
        // pEl.append(nameNode);
        divEl.append(pEl);

        const likeContaineEl = document.createElement('div');
        const spanEl = document.createElement('span');
        spanEl.textContent = `likes: ${post.likes}`;
        spanEl.dataset.part = 'likes';  // camelCase -> camel-case, (except: htmlFor -> for, etc)
        likeContaineEl.append(spanEl);

        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'like me';
        buttonEl.dataset.action = 'like'; 
        likeContaineEl.append(buttonEl);

        divEl.append(likeContaineEl);

        divEl.actions = {
            updateLikes() {
                spanEl.textContent = `likes: ${post.likes}`;
            },
        };

        return divEl;
    };

    // Element -> El

    // likeEl.onclick = function(...)
    const clickHandler = (post, cardEl) => {
        post.likes += 1; // state change       
        // const likesEl = cardEl.querySelector('[data-part="likes"]');
        // likesEl.textContent = `likes: ${post.likes}`; // targeted update
        cardEl.actions.updateLikes();

        // render();
    };

    const addHandler = (ev) => {
        // currentTarget = form
        // target = input | button | form
        // target vs currentTarget
        ev.preventDefault();
        const currentTarget = ev.currentTarget;
        const name = currentTarget.elements['post-name'].value;
        const post = {
            id: Date(),
            name: name,
            image: 'https://placehold.co/200x100',
            likes: 0,
        };

        posts.push(post);
        ev.currentTarget.reset();
        render();

        // TODO:
        // 1. add to state
        // 2. partial update || render
    };

    const render = () => {
        const containerEl = document.querySelector('[data-id="posts"]');

        // not optimized
        Array.from(containerEl.children).forEach((o) => o.remove());

        // default behaviour
        const formEl = document.createElement('form');
        formEl.onsubmit = addHandler; // browser call addHandler(ev)
        const inputEl = document.createElement('input');
        inputEl.name = 'post-name';
        formEl.append(inputEl);

        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'add';
        formEl.append(buttonEl);

        containerEl.append(formEl);

        const postEls = posts.map((o) => {
            const cardEl = PostCard(o);
            const likeEl = cardEl.querySelector('[data-action="like"]');
            likeEl.onclick = (ev) => clickHandler(ev, o, cardEl); // browser anonymous arrow function(ev)
            return cardEl;
        });
        // spread
        // [1, 2, 3] => ...array => 1, 2, 3
        // {a: 1, b: 2} => {...obj} <=> {a: 1, b: 2}
        containerEl.append(...postEls); // <=> containerEl.append(postEls[0], postEls[1])
    };
    render();
})();