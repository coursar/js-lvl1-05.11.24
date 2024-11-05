'use strict';

const amount = 10_000;
const percent = 0.006;
const additionalTax = 20;
const tax = amount * percent + additionalTax; // VS Code -> Ctrl + Shift + R -> Refactoring
console.log(tax);