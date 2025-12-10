
function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscibed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscibed');
    }
}
// Calculate shipping and show total cost
function calculateTotalCost() {
    const orderAmountInput = document.querySelector('.js-order-amount');
    const totalCostElement = document.querySelector('.js-shipping-cost');
    const orderAmount = parseInt(orderAmountInput.value, 10);
    const shippingCost = orderAmount < 40 ? orderAmount + 10 : orderAmount;
    totalCostElement.textContent = shippingCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}