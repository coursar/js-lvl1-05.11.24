// IIFE
(function() {
    'use strict';
    const lib = window.lib;

    // my code
    function handleCalculateTax() {
        // FIXME: check amountValue format or use input-mask
        const amount = Number.parseInt(window.amount.value, 10); // shadows outer name
        // FIXME: check amountValue for finite number + limits
        const cardType = window.cardType.value;

        const tax = lib.calculateTax(amount, cardType);

        console.log(tax);
    }

    // "export"
    window.app = {
        handleCalculateTax: handleCalculateTax,
    };

    // + 150 fn
})();
