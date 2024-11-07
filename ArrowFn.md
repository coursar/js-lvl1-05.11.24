```js
// - forEach
const callback = function(element, index) { // arguments
    console.log(element, index);
};
// 100 lines
scores.forEach(callback);
// scores.forEach(function(element, index) {
//     console.log(element, index);
// });

// function => arrow function
scores.forEach((element, index) => { // fat arrow
    console.log(element, index);
});
// 1. short names for params
scores.forEach((o, idx) => { // fat arrow
    console.log(o, idx);
});
// 2.* only 1 statement => no {} & no return
scores.forEach((o, idx) => console.log(o, idx));
// 3.* only 1 param => no ()
scores.forEach(o => console.log(o));

// Array.prototype.forEach = function(callback) { 
//     const scores = [];
//     for (let index = 0; index < scores.length; index++) {
//         const element = scores[index];
//         callback(element, index, scores);
//     }
// }
```