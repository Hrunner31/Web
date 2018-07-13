'use strict'

window.addEventListener("load", () => {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim() == null || nombre.trim().length == 0) {

        }

        if (apellido.trim() == null || apellido.trim().length == 0) {

        }

        if (edad == null || nombre.length <= 0 || isNaN(edad)) {

        }

        box_dashed.style.display = "block";

        //var datosUsuario = [nombre, apellido, edad];

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        for (let i in datosUsuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[i]);
            box_dashed.append(parrafo);
        }
    });

});