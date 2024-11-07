```js
const scores = [8, 3, 4, 5];

// Loops
{
    let index = 0;
    while (index < scores.length) {
        console.log(scores[index]);
        index++;
    }
}
{
    let index = 0;
    do {
        console.log(scores[index]);
        index++;
    } while (index < scores.length);
}

for (let index = 0; index < scores.length; index++) {
    const element = scores[index];
    console.log(scores[index]);
}

// Enhaced For/For-Of
for (const element of scores) {
    console.log(element);
}
```