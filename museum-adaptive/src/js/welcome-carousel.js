let carouselItems = document.querySelectorAll('.welcome-carousel-item');
let display = document.querySelector('.welcome-carousel-controls-display');
let li = document.querySelectorAll('.list-item')
let ul = document.getElementById('items-list')

let currentItem = 0;
let isEnabled = true;

ul.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {
        if (event.target.classList.contains('active')) {
            return
        }
        nextItem(event.target.innerText - 2)
    }
})


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

const swipeDetected = (el) => {

    let startValueX = 0;
    let startValueY = 0;
    let distX = 0;
    let distY = 0;

    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    el.addEventListener('mousedown', function (event) {
        startValueX = event.pageX;
        startValueY = event.pageY;
        startTime = new Date().getTime();
        event.preventDefault();
    });

    el.addEventListener('mouseup', function (event) {
        distX = event.pageX - startValueX;
        distY = event.pageY - startValueY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if (distX > 0) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        event.preventDefault();
    })

    el.addEventListener('touchstart', function (event) {

        if(event.target.classList.contains('control')) {
            if(event.target.classList.contains('left')) {
                if (isEnabled) {
                    previousItem(currentItem);
                }
            } else {
                if (isEnabled) {
                    nextItem(currentItem);
                }
            }
        }

        let touchObj = event.changedTouches[0];
        startValueX = touchObj.pageX;
        startValueY = touchObj.pageY;

        startTime = new Date().getTime();
        
        event.preventDefault();
    });

    el.addEventListener('touchmove', function (event) {
        event.preventDefault();
    });

    el.addEventListener('touchend', function (event) {
        let touchObj = event.changedTouches[0];
        distX = touchObj.pageX - startValueX;
        distY = touchObj.pageY - startValueY;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if (distX > 0) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        event.preventDefault();
    })
}

let carousel = document.querySelector('.welcome-carousel')

swipeDetected(carousel)