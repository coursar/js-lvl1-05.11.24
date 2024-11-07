```js
// Instance methods
// Docs: Date.prototype.getDate()

const date = new Date();
date.getDate(); // => date.[[Prototype]].getDate()
```


```js
// static methods
// Docs: Date.now()

const date = Date.now(); // number
```

```js
// old way
function Card(product) {
    // new.target - meta
    if (new.target === undefined) {
        // return 'new card';
        throw new Error('Please use the \'new\' operator, this object constructor cannot be called as a function');
    }

    this.product = product;
}
// Card.prototype = {
//   constructor: Card
// }
// static
Card.generate = function() {
    // 
};
Card.prototype.favorite = function() {
    //...
};

Object.defineProperty(..., {
    get, set
})

```

```js
// modern way

// 1. syntax sugar
// 2. restrictions
class Card {
    constructor(product) {
        this.product = product;
        this._secret = 'secret'; 
    }

    favorite() {
        //...
    }

    get secret() {
        return this._secret;
    }

    set secret(value) {
        this._secret = value;
    }

    static generate() {
        //...
    }
}
```