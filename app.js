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

function calculateCashback() {
    const amount = 10_000;
    const percent = 0.006;
    const additionalTax = 20;
    const tax = amount * percent + additionalTax; // VS Code -> Ctrl + Shift + R -> Refactoring
    console.log(scriptVar); // globalThis.console.log
    console.log(tax);
}

const scriptVar = '...';