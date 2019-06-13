function tip15() {
    var billInput = document.getElementById('bill_input').value;
    // var billInput = $('#bill_input').val();
    console.log(`Bill input: ${billInput}`)

    var tipTotal = billInput * .15;
    // $('#tip_total').val() = tipTotal.toFixed(2);
    document.getElementById('tip_total').value = tipTotal.toFixed(2);
    console.log(`Tip total: ${tipTotal}`)

    var billSplit = document.getElementById('split_input').value;
    // var billSplit = $('#split_input').val();

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);
    // $('#split_tip').val() = splitTip.toFixed(2);
    console.log(`Split tip: ${splitTip}`)

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
    // $('#split_total').val() = splitTotal.toFixed(2);
    console.log(`Split total: ${splitTotal}`)
}

function tip18() {
    var billInput = document.getElementById('bill_input').value;
    console.log(`Bill input: ${billInput}`)

    var tipTotal = billInput * .18;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);
    console.log(`Tip total: ${tipTotal}`)

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);
    console.log(`Split tip: ${splitTip}`)

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
    console.log(`Split total: ${splitTotal}`)
}

function tip20() {
    var billInput = document.getElementById('bill_input').value;
    console.log(`Bill input: ${billInput}`)

    var tipTotal = billInput * .20;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);
    console.log(`Tip total: ${tipTotal}`)

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);
    console.log(`Split tip: ${splitTip}`)

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
    console.log(`Split total: ${splitTotal}`)
}


// document.getElementById('other').style.display = 'none';

// function tipOther(id) {
//     document.getElementById('other').style.display = 'block';

//     var other = document.getElementById('other');
//     if (other.style.display == 'block') {
//         other.style.display = 'none';
//     } else {
//         other.style.display = 'block';
//     }
// }

$('#other').hide();

function tipOther() {
    $('#other').show();

    var billInput = document.getElementById('bill_input').value;
    console.log(`Bill input: ${billInput}`)

    otherTip = document.getElementById('other_input').value;
    console.log(`Other tip: ${otherTip}`)

    var tipTotal = (otherTip / 100) * billInput;
    document.getElementById('tip_total').value = tipTotal.toFixed(2);
    console.log(`Tip total: ${tipTotal}`)

    var billSplit = document.getElementById('split_input').value;

    var splitTip = (tipTotal) / billSplit;
    document.getElementById('split_tip').value = splitTip.toFixed(2);
    console.log(`Split tip: ${splitTip}`)

    var splitTotal = (billInput / billSplit) + splitTip;
    document.getElementById('split_total').value = splitTotal.toFixed(2);
    console.log(`Split total: ${splitTotal}`)
}