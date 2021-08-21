// declare variable
const extraMemoryCost = document.getElementById('memory-cost');
const extraStorageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-charge');
const total = document.getElementById('total');
const promoCode = document.getElementById('promo-code');

// update memory price
function memoryPrice(btnNum) {
    if (btnNum == 1) {
        extraMemoryCost.innerText = 0;
    }
    else {
        extraMemoryCost.innerText = 180;
    }
    updatePrice();
}

// update storage price
function storageCost(btnNum) {
    if (btnNum == 1) {
        extraStorageCost.innerText = 0;
    }
    else if (btnNum == 2) {
        extraStorageCost.innerText = 100;
    }
    else {
        extraStorageCost.innerText = 180;
    }
    updatePrice();
}

// update delivery charge
function deliveryCharge(btnNum) {
    if (btnNum == 1) {
        deliveryCost.innerText = 0;
    }
    else {
        deliveryCost.innerText = 20;
    }
    updatePrice();
}

// update total price
function updatePrice() {
    document.getElementById('total-price').innerText = parseInt(document.getElementById('best-price').innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCost.innerText);
    // set total
    total.innerText = document.getElementById('total-price').innerText;
}

// get 20% discount (PROMO CODE is NOT CASE Sensitive)
function checkPromoCode() {
    if (promoCode.value.toLowerCase() == 'stevekaku') {
        total.innerText = parseFloat(total.innerText) - parseFloat(total.innerText * 0.20);
        document.getElementById('promo-btn').setAttribute('disabled', true);
    }
    promoCode.value = '';
}


// enabling apply button
for (const btn of document.getElementsByClassName('btn-outline-dark')) {
    btn.addEventListener('click', function () {
        document.getElementById('promo-btn').removeAttribute('disabled');
    })
}