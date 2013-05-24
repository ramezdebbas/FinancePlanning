// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/CreditCard.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();

function creditcardloan() {
    var balance = parseFloat(txtbalance.value, 10);
    var ir = parseFloat(txtir.value, 10);
    var mp = parseFloat(txtpayment.value, 10);
    var irinside = 0;
    irinside = (1 + (ir / 36500));
    var irpow = 0;
    irpow = Math.pow(irinside, 30);
    logamount = (1 + (balance / mp) * (1 - irpow));
    var lognum = 0;
    lognum = Math.log(logamount);
    var logden = 0;
    logden = Math.log(1 + (ir / 36500));
    var months = 0;

    if (ir == 0)
        months = balance / mp,
        months = Math.ceil(months);
    else
        months = -1 / 30 * (lognum / logden),
        months = Math.ceil(months);
    var CCMonths = 0;
    CCMonths = (months) % 12;
    var CCYears = 0;
    CCYears = (months - CCMonths) / 12;
    if (isNaN(months) == false)
        if (CCMonths > 1)
            if (CCYears > 1)
                txtNumberOfMonths.value = CCYears + ' years and ' + CCMonths + ' months';
            else if (CCYears > 0)
                txtNumberOfMonths.value = CCYears + ' year and ' + CCMonths + ' months';
            else
                txtNumberOfMonths.value = CCMonths + ' months';
        else if (CCMonths == 1)
            if (CCYears > 1)
                txtNumberOfMonths.value = CCYears + ' years and ' + CCMonths + ' month';
            else if (CCYears > 0)
                txtNumberOfMonths.value = CCYears + ' year and ' + CCMonths + ' month';
            else
                txtNumberOfMonths.value = CCMonths + ' month';
        else
            if (CCYears > 1)
                txtNumberOfMonths.value = CCYears + ' years';
            else
                txtNumberOfMonths.value = CCYears + ' year';
    else
        txtNumberOfMonths.value = '',
        infinitymessage.value = 'At the current monthly payment, you will never pay off this credit card. You must increase your monthly payment.';
}
