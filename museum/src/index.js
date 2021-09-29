import "./style.scss"
import "./assets/svg/louvre-icon.svg"
import "./js/mapbox"
import "./js/modal"
import "./js/gallery"
import "./js/welcome-carousel"


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

