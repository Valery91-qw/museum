let carouselItems = document.querySelectorAll('.welcome-carousel-item');
let display = document.querySelector('.welcome-carousel-controls-display');
let li = document.querySelectorAll('.list-item')

let currentItem = 0;
let isEnabled = true;

function changeItem(item) {
    currentItem = (item + carouselItems.length) % carouselItems.length
    display.innerText = `0${currentItem + 1} | 0${carouselItems.length}`
}

function hideItem(direction) {
    isEnabled = false;
    carouselItems[currentItem].classList.add(direction)
    carouselItems[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction)
    })
    li[currentItem].classList.remove('active')
}

function showItem(direction) {
    carouselItems[currentItem].classList.add('next', direction)
    carouselItems[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction)
        this.classList.add('active')
        isEnabled = true
    })
    li[currentItem].classList.add('active')
}


function previousItem(item) {
    hideItem('to-right')
    changeItem(item - 1)
    showItem('from-right')
}

function nextItem(item) {
    hideItem('to-left')
    changeItem(item + 1)
    showItem('from-left')
}

document.querySelector('.control.prev').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem)
    }
})

document.querySelector('.control.next').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem)
    }
})