// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Savings/Savings.html", {
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
function savingscalc() {
    var principal = parseFloat(txtPrincipal.value, 10);
    var MD = parseFloat(txtMD.value, 10);
    var ir = parseFloat(txtir.value, 10);
    var years = parseFloat(txtyears.value, 10);

    var principalsavings = 0;
    var totalsavings = 0;
    var MDsavings = 0;
    var r = 0;
    r = ir / 1200;

    if (ir == 0)
        totalsavings = principal + MD * years * 12;
    else
        principalsavings = principal * Math.pow((1 + r), (years * 12)),
        MDsavings = (MD / r) * ((Math.pow(1 + r, (years * 12))) - 1),
        totalsavings = principalsavings + MDsavings;
    txtSavings.value = totalsavings.toFixed(2);
}
