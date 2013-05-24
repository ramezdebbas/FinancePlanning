// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/DatingAge/DatingAge.html", {
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
function DateCalc() {
    var age = parseFloat(txtAge.value, 10);
    var LDA = 0;
    var UDA = 0;
    LDA = age / 2 + Math.pow(age, .5) / .7 + Math.pow(age, 2) / 1000,
    UDA = age * 1.5 - Math.pow(age, .25) / .45 - Math.pow(age, 1.5) / 158;
    if (slider.value == 2)
        LDA = LDA * 1.2,
        UDA = UDA * 1.2;
    else if (slider.value == 1)
        LDA = LDA * 1.1,
        UDA = UDA * 1.1;
    else if (slider.value == -1)
        LDA = LDA * .9,
        UDA = UDA * .9;
    else if (slider.value == -2)
        LDA = LDA * .8,
        UDA = UDA * .8;
    else
        ;
    if (isNaN(age) == false)
        if (age < 18)
            txtLDA.value = "Ask your parent what is the appropriate age for you to date.";
        else if (LDA < 18)
            txtLDA.value = "Your dating age range is between 18 and " + UDA.toFixed(0) + " years of age.";
        else
            txtLDA.value = "Your dating age range is between " + LDA.toFixed(0) + " and " + UDA.toFixed(0) + " years of age.";
}