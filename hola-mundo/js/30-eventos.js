'use strict'

//Un evento es una función que se ejecuta cuando sucede algo
//eventos de ratónote
window.addEventListener('load', () => {
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
  });

  //Mouse out

  boton.addEventListener('mouseout', function() {
    boton.style.background = "#ccc";
  });

  //Focus
  var input = document.querySelector("#campo_nombre");
  input.addEventListener('focus', function() {
    console.log("[focus] estas dentro del input");
  });

  // Blur
  input.addEventListener('blur', function() {
    console.log("[blur] estas fuera del input");
  });
  //Keydown
  input.addEventListener('keydown', function() {
    console.log("[keydown] has pulsado una tecla", String.fromCharCode(event.keyCode));
  });
  //Keypress
  input.addEventListener('keypress', function() {
    console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
  });
  //Keyup
  input.addEventListener('keyup', function() {
    console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
  });

}); //End load
