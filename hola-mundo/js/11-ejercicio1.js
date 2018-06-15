'use strict'

/*
Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
si os numeros no son numeros, o menores a 0 que nos vuelva a pedir un número
*/
var numero1 = parseInt(prompt('introduce el primer numero',0));
var numero2 = parseInt(prompt('intreduce el segundo numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
   numero1 = parseInt(prompt('introduce el primer numero',0));
   numero2 = parseInt(prompt('intreduce el segundo numero', 0));
}

if (numero1 == numero2) {
  alert("Los numeros son iguales");
} else if (numero1 > numero2 ) {
  alert("el numero mayor es: "+numero1+ " y el numero menor es: "+ numero2);
} else if (numero1 < numero2) {
  alert("el numero mayor es: "+numero2 + " y el numero menor es: "+ numero1);
}else {
  alert("introduce los numeros correctos")
}
