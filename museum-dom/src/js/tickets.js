//common menu
let commonBasicAmount = document.getElementById('basic')
let commonSeniorAmount = document.getElementById('senior')
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
let buyNowButton = document.querySelector('.tickets-container-buy-form-tickets-amount-submit')



buyNowButton.addEventListener('click', () => {
    let modalBasic = document.getElementById('modal-basic')
    let modalSenior = document.getElementById('modal-senior')
    modalBasic.value = commonBasicAmount.value
    modalSenior.value = commonSeniorAmount.value
})

let coast = 20
let basic = 1;
let senior = 1;

totalCoastTextElements.forEach(el => {
    el.innerText = ` ${(basic * coast) + (senior * (coast / 2))}`
})

let box = document.querySelectorAll('.tickets-container-buy-form-tickets-amount-quantity-box')

box.forEach(el => {


    el.addEventListener('click', (event) => {

        let input = event.currentTarget.childNodes[3];

        if(input.id === 'basic' || input.id === 'modal-basic') {
            basic = input.value
        } else {
            senior = input.value
        }

        totalCoastTextElements.forEach(el => {
            el.innerText = ` ${(basic * coast) + (senior * (coast / 2))}`
        })

        basicTicketsAmountText.innerText = basic
        seniorTicketsAmountText.innerText = senior

        basicTicketsTotalCoastText.innerText = String(basic * coast)
        seniorTicketsTotalCoastText.innerText = String(senior * (coast / 2))
    })
})

function changePraise() {
    basicTicketCoastText.forEach(el => {
        el.innerText = coast
    })
    seniorTicketCoastText.forEach(el => {
        el.innerText = String(coast / 2)
    })
    totalCoastTextElements.forEach(el => {
        el.innerText = ` ${(basic * coast) + (senior * (coast / 2))}`
    })

    basicTicketsTotalCoastText.innerText = String(basic * coast)
    seniorTicketsTotalCoastText.innerText = String(senior * (coast / 2))
}

commonTicketsType.addEventListener('change', (event) => {
    coast = event.target.value

    ticketTypeText.innerText = event.target.dataset.name

    ticketsType.value = event.target.dataset.name

    changePraise()
})

ticketsType.addEventListener('change', function (event){
    ticketTypeText.innerText = event.target.value

    coast = this.selectedOptions[0].getAttribute('data-coast')

    changePraise()
})



