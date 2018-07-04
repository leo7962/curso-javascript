'use strict'

window.addEventListener('load', function () {

  function intervalo() {
    //timers Interval
    var tiempo = setInterval(function () {
      var encabezado = document.querySelector("h1");
      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        encabezado.style.fontSize = "50px";
      }
      console.log("Set interval ejecutado");

    }, 500);

    return tiempo;
  }

  var tiempo = intervalo();



// var tiempo = setTimeout(function () {
//   var encabezado = document.querySelector("h1");
//   if (encabezado.style.fontSize == "50px") {
//     encabezado.style.fontSize = "30px";
//   } else {
//     encabezado.style.fontSize = "50px";
//   }
//   console.log("Set interval ejecutado");
//
// }, 2000);

  var stop = document.querySelector("#stop");

  stop.addEventListener("click", function() {
    alert("has parado la función");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#start");

  start.addEventListener("click", function() {
    alert("has Iniciado la función");
    intervalo();
  });
});
