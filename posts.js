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

        return divEl;
    };

    // Element -> El
    const containerEl = document.querySelector('[data-id="posts"]');

    const postEls = posts.map((o) => PostCard(o));
    // spread
    // [1, 2, 3] => ...array => 1, 2, 3
    // {a: 1, b: 2} => {...obj} <=> {a: 1, b: 2}
    containerEl.append(...postEls); // <=> containerEl.append(postEls[0], postEls[1])
})();