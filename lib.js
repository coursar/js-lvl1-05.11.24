(function () {
    'use strict';
    // if-else
    // switch
    //  TODO:
    //  boolean*
    //  ==, != - bad
    //  ===, !== - good
    //  >, <, >=, <= - use with numbers
    function calculateTax(amount, cardType) {
        if (cardType === 'mastercard') {
            return calculateMastercard(amount);
        }

        if (cardType === 'visa') {
            // TODO: Visa
            return calculateMastercard(amount);
        }

        if (cardType === 'mir') {
            // TODO: Mir
            return calculateMastercard(amount);
        }

        if (cardType === 'vkpay') {
            // TODO: VkPay
            return calculateMastercard(amount);
        }

        // TODO:
    }

    function calculateMastercard(amount) {
        const percent = 0.006;
        const additionalTax = 20;
        const tax = amount * percent + additionalTax;
        return tax;
    }

    // "export"
    window.lib = {
        calculateTax: calculateTax,
    };
})();