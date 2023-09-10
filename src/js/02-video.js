import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

function saveTime(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time);
}

function restoreTime() {
    const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
    if (currentTime !== null) {
        player.setCurrentTime(parseFloat(currentTime));
    }
}

player.on('timeupdate', throttle(data => {
    const currentTime = data.seconds;
    saveTime(currentTime);
}, 1000));

restoreTime();