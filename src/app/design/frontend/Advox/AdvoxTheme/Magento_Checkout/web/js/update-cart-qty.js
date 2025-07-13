define([
    'jquery',
    'Magento_Checkout/js/action/get-totals',
    'Magento_Customer/js/customer-data'
], function ($, getTotalsAction, customerData) {
    'use strict';

    $(document).on('change', 'input[name$="[qty]"]', function(){
        const form = $('form#form-validate');
        $.ajax({
            url: form.attr('action'),
            data: form.serialize(),
            showLoader: true,
            success: function (res) {
                const parsedResponse = $.parseHTML(res);
                const result = $(parsedResponse).find("#form-validate");
                $("#form-validate").replaceWith(result);

                const sections = ['cart'];
                customerData.invalidate(sections);
                customerData.reload(sections, true);

                const deferred = $.Deferred();
                getTotalsAction([], deferred);
            },
            error: function (xhr, status, error) {
                const err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            }
        });
    });
});
