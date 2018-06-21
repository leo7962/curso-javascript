'use strict'

//document object Model

function cambiaColor(color) {
  caja.style.background = color;
}

//conseguir con un ID concreto

//punto para seleccionar una clase
//var caja = document.getElementById('micaja');
var caja = document.querySelector("#micaja");

//caja.innerHTML ="¡Texto en la caja de js!";
// caja.style.background = "red";
// caja.style.padding = "20px";
// caja.style.color = "white";
// caja.className = "Hola Hola2";

//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
// var contenidoEnTexto = todosLosDivs[2];
// contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
// contenidoEnTexto.style.background = "red";
// contenidoEnTexto.style.padding = "20px";
// contenidoEnTexto.style.color = "white";
// contenidoEnTexto.className = "Hola Hola2";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.prepend(hr);

  for (var valor in todosLosDivs) {

    if (typeof todosLosDivs[valor].textContent == 'string') {
      var parrafo = document.createElement("p");
      var texto = document.createTextNode(todosLosDivs[valor].textContent);
      parrafo.append(texto);
      seccion.append(parrafo);
    }
  }
  seccion.append(hr);

// console.log(todosLosDivs);
// console.log(contenidoEnTexto);

//conseguir elementos por su clase
