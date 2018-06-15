'use strict'

//Prueba con Let y Var

//prueba con Var
var numero = 40;
console.log(numero); //valor 40

if (true) {
  var numero = 50;
  console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con let
var texto = "curso JS";
console.log(texto); //valor

if (true) {
  let texto ="curso de angular 6";
  console.log(texto); //valor de angular
}
console.log(texto);//curso de js
