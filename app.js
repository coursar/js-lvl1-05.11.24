// IIFE
(function() {
    'use strict';
    const lib = window.lib;

    // 1. Built-in Object
    // - JSON
    // - Math
    // - Wrapper
    //   - Number: static Number.parseInt/parseFloat
    //   - String: 
    // - Array -> indexed collection <=
    // 2. Syntax
    // - if switch(value ===)
    // - loops <=
    // 3. Environment: DOM, window

    // Array
    // 1. literal: const items = [1, 3]
    // 2. new Array()

    let scores = [8, 3, 4, 5, 7];
    // Typical ops:
    // - add/remove
    // - sort
    // - iterate
    // - find (none, one, multiple order)
    // - aggregate ops (max, min, sum, avg)

    // polyfill -> core-js
    // if (Array.prototype.max === undefined) {
    //     Array.prototype.max = function() {
    //         console.log('max called');
    //     }
    // }

    // - forEach
    // - find/findIndex
    //   - find -> element || undefined
    //   - findIndex -> index || -1
    //     const firstGreaterThan5 = scores.findIndex((o) => o > 9);
    //     console.log(firstGreaterThan5);
    // - filter -> array
    //  /map/reduce

    // remove
    // search
    // scores = scores.filter((o) => o >= 5);
    // scores = scores.filter((o, idx) => idx !== 2);
    // console.log(scores);

    // map
    // json [product] => [HTMLElement]
    // const transformed = scores.map((o) => `point: ${o}`);
    // console.log(transformed);
 

})();
