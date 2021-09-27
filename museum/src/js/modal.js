
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