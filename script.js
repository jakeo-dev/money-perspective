let sc = document.querySelector('#selectCeleb');
let sp = document.querySelector('#selectProduct');

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function changeCeleb() {
    document.querySelector('#celebIncome').value = sc.value;
    if (sc.value !== '') {
        document.querySelector('#celebIncome').disabled = true;
    } else {
        document.querySelector('#celebIncome').disabled = false;
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
    let m = document.querySelector('#myIncome').value;
    let c = document.querySelector('#celebIncome').value;
    let a = document.querySelector('#itemPrice').value;

    if ((m <= 0 || m == null) || (c <= 0 || c == null)) {
        alert('Enter a income above zero.');
    } else if (a <= 0 || a == null) {
        alert('Enter a price above zero.');
    } else {

        let price = formatter.format(a * (m / c));

        let celebName = selectCeleb.options[selectCeleb.selectedIndex].text;
        let productName = selectProduct.options[selectProduct.selectedIndex].text;

        if (sp.value !== '') {
            if (sc.value !== '') {
                document.querySelector('#finalPrice').innerText = `${celebName} buying a ${productName.toLowerCase()} is equivalent to you spending ${price}`;
            } else {
                celebName = 'Someone';
                document.querySelector('#finalPrice').innerText = `${celebName} with an annual income of ${formatter.format(c)} buying a ${productName.toLowerCase()} is equivalent to you spending ${price}`;
            }
        } else {
            if (sc.value !== '') {
                document.querySelector('#finalPrice').innerText = `${celebName} spending ${formatter.format(a)} is equivalent to you spending ${price}`;
            } else {
                celebName = 'Someone';
                document.querySelector('#finalPrice').innerText = `${celebName} with an annual income of ${formatter.format(c)} spending ${formatter.format(a)} is equivalent to you spending ${price}`;
            }
        }

    }
}