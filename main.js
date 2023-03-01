var cancionSonando = 0;
var Favoritos = [];

const AddFavoritos = ( id ) => {

    if(Favoritos.includes(id)) {
        Favoritos = Favoritos.filter(function(value) {
            return value !== id;
        });
    } else {
        Favoritos.push(id);
    }
    GenerarFavoritos(Favoritos)
}

const GenerarLista = ( playlist ) => {
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    for(cancion in Canciones){
        if(Canciones[cancion].playlist == playlist ) {
            lista.innerHTML += `
            <div class="cancion-lista" onclick="Seleccion(${Canciones[cancion].id});">
                <div class="id">${Canciones[cancion].id}</div>
                <div class="imagen"><img src="${Canciones[cancion].imagen}"></div>
                <div class="titulo">${Canciones[cancion].titulo}</div>
                <div class="autor">${Canciones[cancion].autor}</div>
            </div>`
        }
    }
}

const GenerarFavoritos = ( lista ) => {
    favoritos.innerHTML = '';
    lista.forEach(elemento => {
        for(cancion in Canciones) {
            if( elemento === Canciones[cancion].id ) {
                favoritos.innerHTML += `<div class="favorito" onclick="Seleccion(${Canciones[cancion].id});">${Canciones[cancion].titulo} de ${Canciones[cancion].autor}</div>`
            }
        }
    });
}

const Seleccion = ( id ) => {
    for(cancion in Canciones) {
        if(Canciones[cancion].id === id) {
            control.innerHTML = `<audio src="${Canciones[cancion].audio}" controls autoplay id="audio">`;
            titulo.innerHTML = Canciones[cancion].titulo;
            imagen.innerHTML = `<img src="${Canciones[cancion].imagen}">`;
            autor.innerHTML = Canciones[cancion].autor;
            fav.innerHTML = `<span onclick="AddFavoritos(${Canciones[cancion].id})">+</span>`;
            cancionSonando = Canciones[cancion].id;
        }
    }
}

setInterval(function () { if(audio.ended){ cancionSonando++; Seleccion(cancionSonando); } }, 2000);
