import stop from '../assets/img/video/pause.svg'
import play from '../assets/img/video/control-play.svg'

let videoPlayer = document.getElementById('video-player');
let inputs = document.querySelectorAll('input[type=range]');
let playButton = document.querySelector('.video-section-player-play-button')
let controlButton = document.getElementById('video-control-play')
let image = document.getElementById('play-image')
let volumeControl = document.getElementById('audio-track')
let playControl = document.getElementById('video-track')

inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        let target = event.target

        let value = target.value

        target.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
    })
})
volumeControl.addEventListener('input', () => {
    videoPlayer.volume = volumeControl.value / 100
}, false)
playControl.addEventListener('input', () => {
    let duration = videoPlayer.duration
    let current = (duration / 100) * playControl.value
    videoPlayer.currentTime = current
})

videoPlayer.addEventListener('timeupdate', () => {
    let value = (videoPlayer.currentTime / videoPlayer.duration) * 100
    playControl.value = value
    playControl.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
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
