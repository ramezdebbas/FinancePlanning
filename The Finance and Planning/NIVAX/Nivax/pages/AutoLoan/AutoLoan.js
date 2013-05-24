// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/AutoLoan/AutoLoan.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />
            /// <param name="viewState" value="Windows.UI.ViewManagement.ApplicationViewState" />
            /// <param name="lastViewState" value="Windows.UI.ViewManagement.ApplicationViewState" />

            // TODO: Respond to changes in viewState.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        }
    });
})();

function autoloan() {
    var cost = parseFloat(txtCost.value, 10);
    var taxrate = parseFloat(txtTaxRate.value, 10);
    var reg = parseFloat(txtReg.value, 10);
    var rebate = parseFloat(txtRebate.value, 10);
    var tradein = parseFloat(txtTradeIn.value, 10);
    var dp = parseFloat(txtDP.value, 10);
    var ir = parseFloat(txtir.value, 10);
    var years = parseFloat(txtyears.value, 10);
    var j = 0;
    j = ir / 1200.0;
    var N = 0;
    N = years * 12.0;
    var jnpow = 0;
    jnpow = Math.pow(1 + j, -N);
    var C = 0;
    C = (j / (1 - jnpow));
    var vehiclecost = cost + (cost * taxrate / 100) + reg - rebate - tradein - dp;
    var MP = 0;
    if (ir == 0)
        MP = vehiclecost / N;
    else
        MP = vehiclecost * C;
    var payment = 0;
    payment = MP;
    txtMP.value = payment.toFixed(2);
}

