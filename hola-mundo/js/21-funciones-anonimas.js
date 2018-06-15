'use strict'

//Funciones anonimas
//Es una función que no tiene nombre

var pelicula = function(nombre){
  return "La pelicula es: "+nombre;
}

//Funcion Callback
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

//console.log(sumame( 64654, 6546464));

sumame(5, 7, function (dato) {
  console.log("La suma es: ", dato);
}, function (dato) {
  console.log("La suma por dos es: ",(dato*2));
}
);
