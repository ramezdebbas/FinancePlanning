// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/HowMuchAfford/HowMuchAfford.html", {
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
function howmuchloan() {
    var grossinc = parseFloat(txtGrossInc.value, 10);
    var CC = parseFloat(txtPaymentsCC.value, 10);
    var Auto = parseFloat(txtPaymentsAuto.value, 10);
    var SL = parseFloat(txtPaymentsSL.value, 10);
    var CS = parseFloat(txtPaymentsCS.value, 10);
    var OMO = parseFloat(txtPaymentsOMO.value, 10);

    var IR = parseFloat(txtIR.value, 10);
    var Term = parseFloat(txtTerm.value, 10);
    var DP = parseFloat(txtDP.value, 10);
    var PT = parseFloat(txtPT.value, 10);
    var HI = parseFloat(txtHI.value, 10);
    var FER = parseFloat(txtFER.value, 10);
    var BER = parseFloat(txtBER.value, 10);

    var FERCalc = 0;
    //FERCalc = FER * (grossinc / 12.0);
    FERCalc = (FER / 100) * (grossinc / 12.0);
    //txtFERCalc.value = FERCalc.toFixed(2);
    var BERCalc = 0;
    //BERCalc = (BER - (CC + Auto + CS + OMO) / (grossinc / 12.0)) * (grossinc / 12.0);
    BERCalc = ((BER / 100) - ((CC + Auto + SL + CS + OMO) / (grossinc / 12.0))) * (grossinc / 12.0);
    //txtBERCalc.value = BERCalc.toFixed(2);
    var MaxPayment = 0;
    MaxPayment = Math.min(FERCalc, BERCalc) - ((PT + HI) / 12.0);
    //txtMaxPayment.value = MaxPayment.toFixed(2);
    var j = 0;
    j = IR / 1200.0;
    var N = 0;
    //txtj.value = j.toFixed(2);
    N = Term * 12.0;
    var jnpow = 0;
    //txtN.value = N.toFixed(2);
    jnpow = Math.pow(1 + j, -N);
    var C = 0;
    C = (j / (1 - jnpow));
    //txtC.value = C.toFixed(2);
    var HomePrice = 0;
    if (IR == 0)
        HomePrice = DP + (MaxPayment * Term * 12);
    else 
        HomePrice = DP + (MaxPayment / C);
    txtHouse.value = HomePrice.toFixed(2);
}
