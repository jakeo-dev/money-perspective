let sc = document.getElementById('selectCeleb');
let sp = document.getElementById('selectProduct');

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function changeCeleb() {
    //let selectedCeleb = sc.options[sc.selectedIndex].value;
    document.getElementById('celebSalary').value = sc.value;
}

function changeProduct() {
    //let selectedProduct = sp.options[sp.selectedIndex].value;
    document.getElementById('itemPrice').value = sp.value;

    /* if (sp.value == '1000') {
        document.getElementById('product').src = 'iphone.png';
    } */
}

function calc() {
    let m = document.getElementById('mySalary').value;
    let c = document.getElementById('celebSalary').value;
    let a = document.getElementById('itemPrice').value;

    if (m <= 0 || m == null) {
        alert('Enter a salary above zero.');
    } else if (c <= 0 || c == null) {
        alert("Enter a celebrity's salary above zero.");
    } else if (a <= 0 || a == null) {
        alert('Nothing is free. Enter a price above zero.');
    } else {

        let price = formatter.format(a * (1 / (c / m)));

        let celebName = selectCeleb.options[selectCeleb.selectedIndex].text;
        let productName = selectProduct.options[selectProduct.selectedIndex].text;

        document.getElementById('finalPrice').innerText = `${celebName} purchasing a ${productName.toLowerCase()} is equivalent to you spending ${price}`;
    }
}