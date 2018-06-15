'use strict'
/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) || numero1 >= numero2) {
   numero1 = parseInt(prompt('introduce el primer numero',0));
   numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}
document.write("<h2>De "+numero1+" a "+ numero2 +" Estan estos numeros</h2>")

for (var i = numero1; i < numero2; i++) {
  document.write(i+"</br>")
}
