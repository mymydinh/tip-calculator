function tip10() {
    var billInput = document.getElementById('bill_input').value;

    var tipTotal = billInput * .10;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
}

function tip15() {
    var billInput = document.getElementById('bill_input').value;

    var tipTotal = billInput * .15;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
}

function tip18() {
    var billInput = document.getElementById('bill_input').value;

    var tipTotal = billInput * .18;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
}

function tip20() {
    var billInput = document.getElementById('bill_input').value;

    var tipTotal = billInput * .20;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
}
