'use strict'

/*
hacer una calculadora que pila dos numeros por pantalla
si erramos, que nos lo vuelva a pedir
en el cuerpo de la pagina, un alert y por consola el resultado de multiplicar, dividir, sumar y reestar
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 <0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce el primer numero", 0));
  numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}


var resultado = "La suma es: "+(numero1+numero2)+ " </br>"+
                "La resta es: "+(numero1-numero2)+ "</br>"+
                "La multiplicación es: "+ (numero1*numero2)+"</br>"+
                "La división es: "+ (numero1/numero2)+ "</br>";
var resultado2 = "La suma es: "+(numero1+numero2)+ " \n"+
                "La resta es: "+(numero1-numero2)+ "\n"+
                "La multiplicación es: "+ (numero1*numero2)+"\n"+
                "La división es: "+ (numero1/numero2)+ "\n";
                
document.write(resultado);
alert(resultado2);
console.log(resultado2);
