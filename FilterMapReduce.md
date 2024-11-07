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