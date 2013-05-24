function undoformatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    return (num);
}