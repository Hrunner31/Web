'use strict'

//Eventos
//Eventos del ratón

//load => carga primero la pagina antes de cargar los scripts
window.addEventListener('load', () => {

    var boton = document.querySelector("#boton");
    var input = document.querySelector("#nombre");

    function cambiarColor() {
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = 'red';
        }
        else {
            boton.style.background = 'green';
        }
        return true;
    }

    //EVento click que captura el click del raton 
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
    });

    //Mouse out
    boton.addEventListener('mouseout', function () {
        boton.style.background = "black";
    });

    //Focus
    input.addEventListener('focus', function () {
        console.log("Estas dentro del input");
    });

    //Blur
    input.addEventListener('blur', function () {
        console.log("Estas fuera del input");
    });

    //Keydown
    input.addEventListener('keydown', function (event) {
        console.log("Pulsando la tecla", String.fromCharCode(event.keyCode));
    });

    //keypress
    input.addEventListener('keypress', function (event) {
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener('keyup', function (event) {
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });

});