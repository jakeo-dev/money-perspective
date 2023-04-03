let sc = document.querySelector('#selectCeleb');
let sp = document.querySelector('#selectProduct');

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function changeCeleb() {
    document.querySelector('#celebSalary').value = sc.value;
    if (sc.value !== '') {
        document.querySelector('#celebSalary').disabled = true;
    } else {
        document.querySelector('#celebSalary').disabled = false;
    }
}

function changeProduct() {
    document.querySelector('#itemPrice').value = sp.value;

    if (sp.value !== '') {
        document.querySelector('#itemPrice').disabled = true;
    } else {
        document.querySelector('#itemPrice').disabled = false;
    }
}

function calc() {
    let m = document.querySelector('#mySalary').value;
    let c = document.querySelector('#celebSalary').value;
    let a = document.querySelector('#itemPrice').value;

    if ((m <= 0 || m == null) || (c <= 0 || c == null)) {
        alert('Enter a salary above zero.');
    } else if (a <= 0 || a == null) {
        alert('Enter a price above zero.');
    } else {

        let price = formatter.format(a * (1 / (c / m)));

        let celebName = selectCeleb.options[selectCeleb.selectedIndex].text;
        let productName = selectProduct.options[selectProduct.selectedIndex].text;

        document.querySelector('#finalPrice').innerText = `${celebName} buying a ${productName.toLowerCase()} is equivalent to you spending ${price}`;
    }
}