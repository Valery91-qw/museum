//common menu
let basicAmount = document.getElementById('basic')
let seniorAmount = document.getElementById('senior')
let commonTicketsType = document.getElementById('tickets-type')
let totalCoastTextElements = document.querySelectorAll('.total-tickets-coast')
//modal window
let ticketTypeText = document.getElementById('modal-tickets-type')
let ticketsType = document.getElementById('modal-type')
let basicTicketCoastText = document.querySelectorAll('.modal-basic-coast')
let basicTicketsAmountText = document.getElementById('modal-basic-amount')
let basicTicketsTotalCoastText = document.getElementById('modal-basic-total-coast')
let seniorTicketCoastText = document.querySelectorAll('.modal-senior-coast')
let seniorTicketsAmountText = document.getElementById('modal-senior-amount')
let seniorTicketsTotalCoastText = document.getElementById('modal-senior-total-coast')

let coast = 20

totalCoastTextElements.forEach(el => {
    el.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`
})

let box = document.querySelectorAll('.tickets-container-buy-form-tickets-amount-quantity-box')

box.forEach(el => {

    el.addEventListener('click', () => {

        totalCoastTextElements.forEach(el => {
            el.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`
        })

        basicTicketsAmountText.innerText = basicAmount.value
        seniorTicketsAmountText.innerText = seniorAmount.value

        basicTicketsTotalCoastText.innerText = String(basicAmount.value * coast)
        seniorTicketsTotalCoastText.innerText = String(seniorAmount.value * (coast / 2))
    })
})

commonTicketsType.addEventListener('change', (event) => {
    coast = event.target.value

    totalCoastTextElements.forEach(el => {
        el.innerText = ` ${(basicAmount.value * coast) + (seniorAmount.value * (coast / 2))}`
    })

    basicTicketsTotalCoastText.innerText = String(basicAmount.value * coast)
    seniorTicketsTotalCoastText.innerText = String(seniorAmount.value * (coast / 2))
    ticketTypeText.innerText = event.target.dataset.name

    ticketsType.value = event.target.dataset.name

    basicTicketCoastText.forEach(el => {
        el.innerText = coast
    })
    seniorTicketCoastText.forEach(el => {
        el.innerText = String(coast / 2)
    })
})

ticketsType.addEventListener('change', function (event){
    ticketTypeText.innerText = event.target.value

    coast = this.selectedOptions[0].getAttribute('data-coast')

    basicTicketCoastText.forEach(el => {
        el.innerText = coast
    })
    seniorTicketCoastText.forEach(el => {
        el.innerText = String(coast / 2)
    })
})



