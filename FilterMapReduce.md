```js
let scores = [8, 3, 4, 5, 7];
scores = scores.filter((o) => o >= 5);
scores = scores.filter((o, idx) => idx !== 2);
console.log(scores);
``` 

```js
// map
// json [product] => [HTMLElement]
let scores = [8, 3, 4, 5, 7];
const transformed = scores.map((o) => `point: ${o}`);
console.log(transformed);
```

Reduce
```js
const scores = [8, 3, 9, 4, 5, 7];
// TODO: look for more efficient way:
//  - sum
//  - max

// 1. reduce(callback):
// 1.1. first iter: acc - scores[0], curr - scores[1]
// 1.2. all other: acc - result from first iteration, scores[2] 
{
    const max = scores.reduce((acc, curr) => acc < curr ? curr : acc);
    console.log(max);

    let acc = scores[0];
    for (let index = 1; index < scores.length; index++) {
        const curr = scores[index];
        if (acc < curr) {
            acc = curr;
        }
    }
    console.log(acc);
}
{
    const sum = scores.reduce((acc, curr) => acc + curr);
    console.log(sum);

    let acc = scores[0];
    for (let index = 1; index < scores.length; index++) {
        const curr = scores[index];
        acc = acc + curr;
    }
    console.log(acc);
}
// 2. reduce(callback, initial)
// 2.1. first iter: acc - initial, curr - scores[0]
// 2.2. all other: acc - result from first iteration, curr - scores[1]

{
    const posts = [
        { id: 1, content: '...', category: 'memo' },
        { id: 2, content: '...', category: 'political' },
        { id: 3, content: '...', category: 'memo' },
        { id: 4, content: '...', category: 'animal' },
    ];

    const expected = {
        memo: 2,
        political: 1,
        animal: 1,
    };

    const actual = {};
    for (const element of posts) {
        if (actual[element.category] === undefined) {
            actual[element.category] = 1
            continue;
        }
        actual[element.category] += 1;
    }
    console.log(actual);

    const actualByReduce = posts.reduce((acc, curr) => {
        // {memo: 2, political: 1}
        return { ...acc, [curr.category]: acc[curr.category] === undefined ? 1 : acc[curr.category] + 1 }
    }, {});
    console.log(actualByReduce);
}

const posts = [
    { id: 1, content: '...', category: 'memo', likes: 10 },
    { id: 2, content: '...', category: 'political', likes: 0 },
    { id: 3, content: '...', category: 'memo', likes: 20 },
    { id: 4, content: '...', category: 'animal', likes: 100 },
];

// sum likes
const sum = posts.filter((o) => o.category === 'memo')
    .map((o) => o.likes)
    .reduce((acc, curr) => acc + curr);
console.log(sum);
```