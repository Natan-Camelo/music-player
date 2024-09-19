let music = document.querySelector("audio");

let ending = document.querySelector(".end");

// Events
document.querySelector("#start-music").addEventListener('click', playMusic);

document.querySelector("#pause").addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', uploadBar);

music.addEventListener('loadedmetadata', () =>
{
    ending.textContent = musicTimer(Math.floor(music.duration)); 
});

// Functions
function playMusic(){
    music.play();

    document.querySelector("#pause").style.display = 'block';
    document.querySelector("#start-music").style.display = 'none';
}

function pauseMusic(){
    music.pause();

    document.querySelector("#pause").style.display = 'none';
    document.querySelector("#start-music").style.display = 'block';
}

function uploadBar() {
    let bar = document.querySelector("progress");
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';

    let musicProgress = document.querySelector(".beginning");
    musicProgress.textContent = musicTimer(Math.floor(music.currentTime));
}

function musicTimer(seconds) {
    let minMusic = Math.floor(seconds / 60);
    let secMusic = seconds % 60; 

    if (secMusic < 10) {
        secMusic = '0' + secMusic;
    }

    return minMusic + ':' + secMusic;
}