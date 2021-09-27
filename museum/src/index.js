import "./style.scss"
import "./assets/svg/louvre-icon.svg"
import "./js/mapbox"



const formBuyTickets = document.getElementById('buy-tickets');

formBuyTickets.addEventListener('submit', (event) => {
    event.preventDefault();
    const modal = document.getElementById('modal-window')
    const overlay = document.getElementById('overlay')
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
});

const modalClose = document.getElementById('modal-close')

modalClose.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-window')
    const overlay = document.getElementById('overlay')
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
})

const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
    const modal = document.getElementById('modal-window')
    const overlay = document.getElementById('overlay')
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
})
