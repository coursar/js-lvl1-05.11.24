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

        const imgEl = document.createElement('img');
        imgEl.src = post.image;
        divEl.append(imgEl);

        const pEl = document.createElement('p');
        pEl.textContent = post.name;
        // const nameNode = document.createTextNode(post.name);
        // pEl.append(nameNode);
        divEl.append(pEl);

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