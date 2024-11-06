# Emmet

! - basic structure

# GitHub

https://github.com/coursar/js-lvl1-05.11.24.git

# Live Server

http://localhost:9999/index.html

# Dev Tools

Ctrl + Shift + I, F12, Menu

# Types

Infinity/-Infinity/NaN

=> var + sloppy mode (bad)
1. strict mode
2. tools (style checker) - eslint, jshint

TODO:
1. use const if you can
2. if can't - use let

let - no hoisting, block scope
const - let+ ummutability on name -> value

TDZ - временно мёртвая зона
--script--
```js
.
.
.
.const amount = 1000;
// we can use amount
```

Isolation:
1. {} - const, let (block scope) - not working*
2. IIFE - function
3. module + webpack + co

# Objects

```js
// 1. object literal
// 2. new Object()
const card = {
    name: 'Дебетовая Альфа-Карта',
    slogan: 'Бесплатная всегда',
    image: 'https://alfabank.servicecdn.ru/site-upload/9c/cd/9465/image-0.png',
    feature1: {
        text: 'Кэшбэк до 100%',
        subtext: 'в барабане суперкэшбэка',
    },
    feature2: {}, // trailing comma
};

// .<name> - access to field
// ['<name>'] - access to field

console.log(card.name);
card.name = 'Дебетовая Альфа';
console.log(card.name);

console.log(card['name']);
card['name'] = 42;

// not recommended
delete card.name;

// top mistakes
// 1. access to not existing field -> undefined
// 2.* write to not existing field -> create

```

# Global

// <element id="...">
// function calculateTax (script level) -> window.calculateTax
// const calculateTax = function (script level)

```js
globalThis || self || global;
globalThis || window || ...
```

## Functions

1. JS doesn't check params & args match
1.1. if match - ok
1.2. if params count < count args, args that doesn't -> undefined
1.3. if params count > count args, args -> arguments
