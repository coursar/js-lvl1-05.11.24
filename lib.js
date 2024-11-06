(function () {
    'use strict';
    // if-else
    // switch -> ==, ===
    //  TODO:
    //  boolean*
    //  ==, != - bad
    //  ===, !== - good
    //  >, <, >=, <= - use with numbers

    // boolean operators:
    // ! - not, || - or, && - and
    function calculateTax(amount, cardType) {
        // if (cardType === 'mastercard') {
        //     return calculateMastercard(amount);
        // }

        // if (cardType === 'visa') {
        //     // TODO: Visa
        //     return calculateVisa(amount);
        // }

        // if (cardType === 'mir') {
        //     // TODO: Mir
        //     return calculateMir(amount);
        // }

        // if (cardType === 'vkpay') {
        //     // TODO: VkPay
        //     return calculateVkpay(amount);
        // }

        const fn = calculator[cardType];
        // FIXME: fn != undefined (typeof)
        return fn(amount);

        // TODO:
        // if no return => return undefined;
        // if return => return; => return undefined;
        // FIXME: throw error || return default value
    }

    function calculateMastercard(amount) {
        const percent = 0.006;
        const additionalTax = 20;
        const tax = amount * percent + additionalTax;
        return tax;
    }

    function calculateVisa(amount) {
        const percent = 0.0075;
        const minTax = 35;
        const tax = amount * percent;

        // TODO: <expr> ? <truthy> : <falsy>
        // if (tax < minTax) {
        //     return minTax;
        // }

        // return tax;

        return tax < minTax ? minTax : tax;
    }

    function calculateMir(amount) {
        const percent = 0.075;
        const minTax = 35;
        const tax = amount * percent;

        // TODO: <expr> ? <truthy> : <falsy>
        // if (tax < minTax) {
        //     return minTax;
        // }

        // return tax;

        return tax < minTax ? minTax : tax;
    }

    function calculateVkpay(amount) {
        return 0;
    }

    const calculator = {
        mastercard: calculateMastercard,
        visa: calculateVisa,
        mir: calculateMir,
        vkpay: calculateVkpay,
    }

    // "export"
    window.lib = {
        calculateTax: calculateTax,
    };
})();