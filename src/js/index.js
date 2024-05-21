const player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
        title: "Paradox",
        artist: "Survive Said The Prophet",
        cover: "../src/files/img/survive-said-the-prophet-paradox.jpeg",
        file: "../src/files/music/paradox.mp3"

        // title: "Roar",
        // artist: "Ulma Sound Junction",
        // cover: "../src/files/img/ulma-sound-junction-roar.jpeg",
        // file: "../src/files/music/ROAR.mp3"
    
        // title: "Youth",
        // artist: "Daughter",
        // cover: "../src/files/img/daughter-youth.jpeg",
        // file: "../src/files/music/Youth.mp3"
    }
};

player.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`;
player.title.innerText = player.data.title;
player.artist.innerText = player.data.artist;
player.audio.src = player.data.file;