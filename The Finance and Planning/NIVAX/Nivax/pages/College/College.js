// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/College/College.html", {
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
function collegesavings() {
    var CurrentCost = parseFloat(txtCurrentCost.value, 10);
    var Inflation = parseFloat(txtInflation.value, 10);
    var Savings = parseFloat(txtSavings.value, 10);
    var ChildAge = parseFloat(txtChildAge.value, 10);
    var StartAge = parseFloat(txtStartAge.value, 10);
    var Length = parseFloat(txtLength.value, 10);
    var ROS = parseFloat(txtROS.value, 10);

    var TCC = 0;
    var i = StartAge - ChildAge;
    var y = 0;

    while (i < Length + StartAge - ChildAge) {
        TCC = TCC + CurrentCost * Math.pow((1 + Inflation / 100), (StartAge - ChildAge + y));
        i++;
        y++;
    }

    var r = ROS / 12;
    //var r = ROS / 1200;
    var q = 0;
    var p = 0;
    var j = StartAge - ChildAge;
    var y = 1;
    var z = 1;

    //q = Savings * Math.pow((1 + r), ((j + Length) * 12));
    //s = q * (r / (Math.pow((1 + r), ((j + Length) * 12)) - 1));

    //while (j < Length + StartAge - ChildAge) {
    //    p = p + (CurrentCost * Math.pow((1 + Inflation / 100), (StartAge - ChildAge - 1 + z))) * ((r / 100) / (Math.pow((1 + r / 100), ((StartAge - ChildAge + z) * 12)) - 1));
    //    j++;
    //    z++;
    //}

    while (j < Length + StartAge - ChildAge) {
        p = p + (CurrentCost * Math.pow((1 + Inflation / 100), (StartAge - ChildAge - 1 + z))) * ((ROS / 100) / (Math.pow((1 + ROS / 100), ((StartAge - ChildAge + z))) - 1));
        j++;
        z++;
        y++;
    }

    //while (j < StartAge - ChildAge) {
    //    p = p + (CurrentCost * Math.pow((1 + Inflation / 100), (StartAge - ChildAge - 1 + z))) * ((ROS / 100) / (Math.pow((1 + ROS / 100), ((StartAge - ChildAge + z))) - 1));
    //    j++;
    //    Z++;
    //}

    //while (j < Length + StartAge - ChildAge) {
    //    p = p - s + (CurrentCost  * Math.pow((1 + Inflation / 100), (StartAge - ChildAge - 1 + z))) * (r / (Math.pow((1 + r), ((StartAge - ChildAge + z) * 12)) - 1));
    //    s = 0;
    //    j++;
    //    z++;
    //}

    txtTotalCollegeCost.value = TCC.toFixed(2);
    txtPayment.value = (p/12).toFixed(2);
}