//common menu
let basicAmount = document.getElementById('basic');
let seniorAmount = document.getElementById('senior')
let totalCoast = document.getElementById('total-amount')
//modal window
let ticketTypeField = document.getElementById('modal-type-tickets')
let ticketsType = document.getElementById('modal-type')
let basicTicketCoast = document.getElementById('modal-basic-coast')

let coast = 20

totalCoast.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`

let box = document.querySelectorAll('.tickets-container-buy-form-tickets-amount-quantity-box')

box.forEach(el => {
    el.addEventListener('click', () => {
        totalCoast.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`
    })
})

document.getElementById('tickets-type').addEventListener('change', (event) => {
    coast = event.target.value
    totalCoast.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`

    ticketTypeField.innerText = event.target.dataset.name

    ticketsType.value = event.target.dataset.name

    basicTicketCoast.innerText = coast
})




