document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Ado', image: './src/files/img/artists/ado.jpg'},
        { name: 'Bring me the Horizon', image: './src/files/img/artists/bring-me-the-horizon.jpg'},
        { name: 'One ok Rock', image: './src/files/img/artists/one-ok-rock.jpg'},
        { name: 'ReoNa', image: './src/files/img/artists/reona.jpg'},
        { name: 'Starset', image: './src/files/img/artists/starset.jpg'},
        { name: 'Survive Said the Prophet', image: './src/files/img/artists/survive-said-the-prophet.jpg'},
    ];

    const albunsData = [
        {name: "A/B", artist: "Kaleo", image: "./src/files/img/albuns/a-b-kaleon.jpg"},
        {name: "Aerosmith", artist: "Aerosmith", image: "./src/files/img/albuns/aerosmith-by-aerosmith.jpg"},
        {name: "Californication (Delux Edition)", artist: "Red Hot Chili Peppers", image: "./src/files/img/albuns/californication-delux-edition.jpg"},
        {name: "Grown-up's Paradise", artist: "Mutemath", image: "./src/files/img/albuns/grown-ups-paradise-by-mili.jpg"},
        {name: "Play Dead", artist: "Mutemath", image: "./src/files/img/albuns/play-dead-mutemath.jpg"},
        {name: "Profeta da Esperança", artist: "Kleber Lucas", image: "./src/files/img/albuns/profeta-da-esperança-kleber-lucas.jpg"},
    ];

    const mainArtist = document.querySelector('.main-artistas');
    const mainAlbuns = document.querySelector('.main-albuns');

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `

        mainArtist.appendChild(artistCard)
    });

    albunsData.forEach( album => {
        const albunsCard = document.createElement('div');
        albunsCard.classList.add('albuns-card');

        albunsCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        mainAlbuns.appendChild(albunsCard)
    });
});

