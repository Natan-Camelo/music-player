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
    }
};

player.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`;
player.title.innerText = player.data.title;
player.artist.innerText = player.data.artist;
player.audio.src = player.data.file;