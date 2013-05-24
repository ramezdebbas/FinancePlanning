// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/BMI/BMI.html", {
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
function BMICalc() {
    var weight = parseFloat(txtweight.value, 10);
    var feet = parseFloat(txtfeet.value, 10);
    var inches = parseFloat(txtinches.value, 10);
    var adultBMI = 0;
    adultBMI = (703 * weight) / Math.pow((feet * 12 + inches), 2);
    if (isNaN(adultBMI) == false)
        txtBMI.value = adultBMI.toFixed(1);
    else
        txtBMI.value = "Complete all fields";
}