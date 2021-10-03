let burgerButton = document.getElementById('burger-button')
let list = document.querySelector('.burger-list')
let welcomeDescription = document.querySelector('.welcome-description')

burgerButton.addEventListener('click', () => {
    if(list.classList.contains('visible')) {
        list.classList.remove('visible')
        welcomeDescription.classList.remove('hide')
    } else {
        list.classList.add('visible')
        welcomeDescription.classList.add('hide')
    }
})

document.querySelector('html').addEventListener('click', (event) => {
    if(event.target.tagName !== 'A' && event.target.id !== 'burger-button') {
        list.classList.remove('visible')
        welcomeDescription.classList.remove('hide')
    }
})