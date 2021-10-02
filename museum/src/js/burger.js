let burgerButton = document.getElementById('burger-button')

burgerButton.addEventListener('click', () => {

    let list = document.querySelector('.burger-list')
    let welcomeDescription = document.querySelector('.welcome-description')

    if(list.classList.contains('visible')) {
        list.classList.remove('visible')
        welcomeDescription.classList.remove('hide')
    } else {
        list.classList.add('visible')
        welcomeDescription.classList.add('hide')
    }

})
