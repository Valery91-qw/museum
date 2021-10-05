import stop from '../assets/img/video/pause.svg';
import play from '../assets/img/video/control-play.svg';
import muteOn from '../assets/img/video/mute-on.svg';
import muteOff from '../assets/img/video/mute-off.svg';
//video
let videoTrack = document.getElementById('video-player')
// main-video controls elements
let commonPlayButton = document.querySelector('.video-section-player-play-button')
let videoControlButton = document.getElementById('video-control-play')
let volumeControlButton = document.getElementById('volume-control-button')
let videoPlayImage = document.getElementById('play-image')
// inputs
let inputsRange = document.querySelectorAll('input[type=range]')
let volumeControl = document.getElementById('audio-track')
let playControl = document.getElementById('video-track')
//pagination controls element
let prevButton = document.getElementById('video-prev')
let nextButton = document.getElementById('video-next')


inputsRange.forEach(element => {
    element.addEventListener('input', (event) => {
        let target = event.target

        let value = target.value

        target.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
    })
})

volumeControl.addEventListener('input', () => {
    let sounds = document.getElementById('volume-image')
    videoTrack.volume = volumeControl.value / 100
    sounds.src = muteOn
    if(volumeControl.value <= 0){
        sounds.src = muteOff
    }
}, false)

playControl.addEventListener('input', () => {
    let duration = videoTrack.duration
    videoTrack.currentTime = (duration / 100) * playControl.value
})

videoTrack.addEventListener('timeupdate', () => {
    let value = (videoTrack.currentTime / videoTrack.duration) * 100
    playControl.value = value
    playControl.style.backgroundImage = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 0%)`
})
volumeControlButton.addEventListener('click', () => {

    let sounds = document.getElementById('volume-image')

    if(videoTrack.volume) {
        videoTrack.volume = 0
        sounds.src = muteOff
        volumeControl.value = 0
        volumeControl.style.backgroundImage = `linear-gradient(to right, #710707 0%, #C4C4C4 0%)`
    }

})
const isPlaying = () => {
    let button = document.getElementById('play-button');

    if (button.classList.contains('hide')) {
        videoTrack.pause()
        button.classList.remove('hide')
        videoPlayImage.src = play
    } else {
        videoTrack.play()
        button.classList.add('hide')
        videoPlayImage.src = stop
    }
}

commonPlayButton.addEventListener('click', () => {
    isPlaying()
})

videoControlButton.addEventListener('click', (event) => {
    isPlaying()
})
