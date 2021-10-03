let videoPlayer = document.getElementById('video-player');
let inputs = document.querySelectorAll('input[type=range]');

inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        let target = event.target

        let min = target.min
        let max = target.max
        let value = target.value

        target.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
    })
})
