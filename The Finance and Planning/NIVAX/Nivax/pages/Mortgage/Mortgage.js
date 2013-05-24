// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Mortgage/Mortgage.html", {
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

function mortgageloan() {
    var price = parseFloat(txtHomePrice.value, 10);
    var dp = parseFloat(txtdp.value, 10);
    var ir = parseFloat(txtir.value, 10);
    var years = parseFloat(txtyears.value, 10);
    var taxrate = parseFloat(txttaxrate.value, 10);
    var homeins = parseFloat(txthomeins.value, 10);
    var Mortgageins = parseFloat(txtMortgageins.value, 10);
    var princ = 0;
    princ = (price - dp);
    txtprinc.value = princ.toFixed(2);
    var j = 0;
    j = ir / 1200.0;
    var N = 0;
    N = years * 12.0;
    var jnpow = 0;
    jnpow = Math.pow(1 + j, -N);
    var C = 0;
    C = (j / (1 - jnpow));
    var MP = 0;
    if (ir == 0)
        MP = princ / N;
    else
        MP = princ * C;
    txtMP.value = MP.toFixed(2);
    var PT = 0;
    PT = (price * taxrate / 100.0) / 12.0;
    txtPT.value = PT.toFixed(2);
    var HI = 0;
    HI = (price * homeins / 100.0) / 12.0;
    txtHI.value = HI.toFixed(2);
    var MI = 0;
    if (dp / price < .2) {
        MI = ((price - dp) * Mortgageins / 100.0) / 12.0;
    }
    else {
        MI = 0
    };
    txtMI.value = MI.toFixed(2);
    var payment = 0;
    payment = MP + PT + HI + MI;
    txtpayment.value = payment.toFixed(2);

    var MICount = 0;
    var b = 0;
    b = princ;
    var balance = 0;
    do {
        balance = b - (MP - (b * (ir / 1200)));
        b = balance;
        balance = 0;
        MICount++;
    } while (b > price * .8);
    var MIMonths = 0;
    MIMonths = (MICount - 1) % 12;
    var MIYears = 0;
    MIYears = (MICount - MIMonths - 1) / 12;
    if (MICount - 1 > 0)
        if (MIMonths > 1)
            if (MIYears > 1)
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " years and " + MIMonths + " months";
            else if (MIYears > 0)
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " year and " + MIMonths + " months";
            else
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIMonths + " months";
        else if (MIMonths == 1)
            if (MIYears > 1)
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " years and " + MIMonths + " month";
            else if (MIYears > 0)
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " year and " + MIMonths + " month";
            else
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIMonths + " month";
        else
            if (MIYears > 1)
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " years";
            else
                txtCount.value = "Mortgage Insurance will need to be paid for " + MIYears + " year";
    else txtCount.value = "";
}
