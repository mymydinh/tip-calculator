// function tip15 () {
//     var billInput = document.getElementById('bill_input').value;
//     billInput = parseFloat(billInput);
//     console.log("Bill Input:", billInput);

//     var billSplit = document.getElementById('split_input')

//     var tipTotal = billInput * .15;
//     document.getElementById('tip_total').value = tipTotal.toFixed(2);
//     console.log("Tip Total:", tipTotal);

//     var billTotal = billInput + tipTotal;
//     document.getElementById('bill_total').value = billTotal.toFixed(2);
//     console.log("Bill Total:", billTotal);
// }

function tip20() {
    var billInput = document.getElementById('bill_input').value;
    var tipTotal = billInput * .20;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);
    var billSplit = document.getElementById('split_input').value;

    var billTotal = (tipTotal) / billSplit;
    document.getElementById('bill_total').value = billTotal.toFixed(2);
}