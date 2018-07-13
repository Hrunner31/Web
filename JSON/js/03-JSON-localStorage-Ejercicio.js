'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', function () {
    var titulo = document.querySelector("#addPelicula").value;
    if (titulo.lenght >= 1)
        localStorage.setItem("titulo", titulo);
});


var ul = document.querySelector('#peliculas-list');
for (let i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
};