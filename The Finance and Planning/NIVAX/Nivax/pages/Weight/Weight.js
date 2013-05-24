// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Weight/Weight.html", {
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
function WeightCalc() {
    var feet = parseFloat(txtfeet.value, 10);
    var inches = parseFloat(txtinches.value, 10);
    var height = 0;
    var height = feet * 12 + inches;
    var lowerweight = 0;
    lowerweight = (18.5 * (Math.pow(height, 2))) / 703;
    var upperweight = 0;
    upperweight = (25 * (Math.pow(height, 2))) / 703;
    if (isNaN(lowerweight) == false)
        txtIW.value = "between " + lowerweight.toFixed(1) + " and " + upperweight.toFixed(1) + " lbs.";
    else
        txtIW.value = "Complete all fields";
}
