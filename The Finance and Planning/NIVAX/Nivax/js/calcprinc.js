function calcprinc() {

    txtHomePrice.value = undoformatCurrency(txtHomePrice.value);
    txtdp.value = undoformatCurrency(txtdp.value);
    txtprinc.value = txtHomePrice.value - txtdp.value;
    if (txtHomePrice.value > 0) {
        txtHomePrice.value = formatCurrency(txtHomePrice.value);
    }
    if (txtdp.value > 0) {
        txtdp.value = formatCurrency(txtdp.value);
    }
    txtprinc.value = formatCurrency(txtprinc.value);
}