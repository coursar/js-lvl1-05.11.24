'use strict';

// function:
// 1. function <name>(<param>) { <body> } -> "всплывает" (но не так, как var)
// 2. const <name> = function(<param>) { <body> };

// Scopes:
//  Name Lookup: on call time
//  3. block
//  2. local (function)
//  1. script *(tommorow - modules)
//  0. global -> globalThis (in Browser -> Window)

// Math operators:
//  +, -, *, /, %, **

// amount, cardType

// function calculateTax (script level) -> window.calculateTax
// const calculateTax = function (script level)
function calculateTax() {
    // FIXME: check amountValue format or use input-mask
    const amount = Number.parseInt(window.amount.value, 10); // shadows outer name
    // FIXME: check amountValue for finite number + limits
    const percent = 0.006;
    const additionalTax = 20;
    // amountValue = 1000
    // X * percent
    const tax = amount * percent + additionalTax; // VS Code -> Ctrl + Shift + R -> Refactoring
    console.log(tax);
}

const scriptVar = '...';

