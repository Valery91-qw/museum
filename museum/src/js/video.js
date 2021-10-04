let videoPlayer = document.getElementById('video-player');
let inputs = document.querySelectorAll('input[type=range]');
let playButton = document.querySelector('.video-section-player-play-button')
let controlButton = document.getElementById('video-control-play')
let image = document.getElementById('play-image')
import stop from '../assets/img/video/pause.svg'
import play from '../assets/img/video/control-play.svg'

inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        let target = event.target

        let value = target.value

        target.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
    })
})

const isPlaying = () => {
    let button = document.getElementById('play-button');

    if (button.classList.contains('hide')) {
        videoPlayer.pause()
        button.classList.remove('hide')
        image.src = play
    } else {
        videoPlayer.play()
        button.classList.add('hide')
        image.src = stop
    }
}

playButton.addEventListener('click', () => {
    isPlaying()
})

controlButton.addEventListener('click', (event) => {
    isPlaying()
})