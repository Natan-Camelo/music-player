document.addEventListener("DOMContentLoaded", () => {
    const playerData = [
        {name: "Paradox", artist: "Survive Said the Prophet", image: "./src/files/img/player/survive-said-the-prophet-paradox.jpeg", file: ".src/files/music/paradox.mp3"},
    ];

    const mainMusic = document.querySelector('.footer-album');

    playerData.forEach( player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <div> 
                <h3>${player.name}</h3>
                <p>${player.artist}</p>
            </div>
        `

        mainMusic.appendChild(playerCard)
    });
});