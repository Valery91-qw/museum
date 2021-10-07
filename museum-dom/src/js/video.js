import stop from '../assets/img/video/pause.svg';
import play from '../assets/img/video/control-play.svg';
import muteOn from '../assets/img/video/mute-on.svg';
import muteOff from '../assets/img/video/mute-off.svg';
import fullScreenOff from '../assets/img/video/fullscreen_exit.svg'
import fullScreenOn from '../assets/img/video/toggle-fullscreen.svg'
//video
let videoTrack = document.querySelector('.video-player')
// main-video controls elements
let commonPlayButton = document.querySelector('.video-section-player-play-button')
let videoControlButton = document.getElementById('video-control-play')
let volumeControlButton = document.getElementById('volume-control-button')
let videoPlayImage = document.getElementById('play-image')
let fullscreenButton = document.querySelector('.fullscreen')
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
videoTrack.addEventListener('ended', () => {
    let button = document.getElementById('play-button');
    button.classList.remove('hide')
    playControl.style.backgroundImage = `linear-gradient(to right, #710707 0%, #C4C4C4 0%)`
    playControl.value = 0
    videoPlayImage.src = play
})
volumeControlButton.addEventListener('click', () => {
    isVolume()
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
const isVolume = () => {
    let sounds = document.getElementById('volume-image')

    if(videoTrack.volume) {
        videoTrack.volume = 0
        sounds.src = muteOff
        volumeControl.value = 0
        volumeControl.style.backgroundImage = `linear-gradient(to right, #710707 0%, #C4C4C4 0%)`
    } else  {
        videoTrack.volume = 1
        sounds.src = muteOn;
        volumeControl.value = 100
        volumeControl.style.backgroundImage = `linear-gradient(to right, #710707 100%, #C4C4C4 0%)`
    }
}
commonPlayButton.addEventListener('click', () => {
    isPlaying()
})

videoControlButton.addEventListener('click', (event) => {
    isPlaying()
})

const changeRate = (change) => {

    let rate = document.querySelector('.video-rate')

    if(change === 'up') {
        rate.classList.add('visible')
        setTimeout(() => {
            rate.classList.remove('visible')
        }, 1000)
        videoTrack.playbackRate += 0.1
        rate.innerHTML = `${videoTrack.playbackRate.toFixed(1)}`

    } else  {
        rate.classList.add('visible')
        setTimeout(() => {
            rate.classList.remove('visible')
        }, 1000)
        videoTrack.playbackRate -= 0.1
        rate.innerHTML = `${videoTrack.playbackRate.toFixed(1)}`
    }

}
const isFullscreen = () => {
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.querySelector('.video-section-custom-player').requestFullscreen()
    }
}
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event.code === 'Space') {
        isPlaying()
    }
    if(event.code === 'KeyM') {
        isVolume()
    }
    if(event.code === 'KeyF') {
        isFullscreen()
    }
    if(event.shiftKey && event.code === 'Period') {
        changeRate('up')
    }
    if(event.shiftKey && event.code === 'Comma') {
        changeRate('down')
    }

})

document.querySelector('.video-section-custom-player')
    .addEventListener('fullscreenchange', (event) => {
    if(document.fullscreenElement) {
        fullscreenButton.src = fullScreenOff
    } else {
        fullscreenButton.src = fullScreenOn
    }
})

fullscreenButton.addEventListener('click', () => {
    isFullscreen()
})
