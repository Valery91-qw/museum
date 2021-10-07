let basicAmount = document.getElementById('basic');
let seniorAmount = document.getElementById('senior')
let totalAmount = document.getElementById('total-amount')

totalAmount.innerText = ` ${(basicAmount.value * 10) + (seniorAmount.value * 5)}`

let box = document.querySelectorAll('.tickets-container-buy-form-tickets-amount-quantity-box')

box.forEach(el => {
    el.addEventListener('click', () => {
        totalAmount.innerText = ` ${(basicAmount.value * 10) + (seniorAmount.value * 5)}`

    })
})





