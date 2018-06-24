'use strict'

//Un evento es una función que se ejecuta cuando sucede algo
//eventos de ratónote


function cambiaColor() {
  console.log("Me has dado click");
  var bg = boton.style.background;
  if (bg == "green") {
    boton.style.background = "red";

  }else {
    boton.style.background = "green";
  }
  boton.style.padding = "10px";
  boton.style.border = "1px solid #ccc";

  return true;
}

var boton = document.querySelector("#boton");
//click
boton.addEventListener('click', function() {cambiaColor()});

//Mouse over

boton.addEventListener('mouseover', function() {
  boton.style.background = "yellow";
})

//Mouse out

boton.addEventListener('mouseout', function() {
  boton.style.background = "#ccc";
})
