'use strict'

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
}

var peliculas = [
    {
        titulo: "La verdad duelo",
        year: 2016,
        pais: "Francia"
    },
    pelicula
]

var caja_peliculas = document.querySelector("#peliculas");
for (let i in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[i].titulo);
    caja_peliculas.append(p);
}
console.log(peliculas);