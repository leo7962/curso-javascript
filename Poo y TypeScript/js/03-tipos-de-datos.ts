type alfanumerico = string | number;

// String
let cadena: alfanumerico ="Leonardo Hernandez";
cadena = 123;

//Numero
let numero: number = 12;

//Booleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "Hola";
cualquiera= 77;

//Arrays
var lenguajes: Array<string> = ["PHP", " JS", " SQL"]

let years: number[] = [ 12, 13, 156, 486, 132, 789]

//Let VS var

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 11;
    var numero2 =55;

    console.log(numero1, numero2);   
}

console.log(numero1, numero2);


console.log(cadena, numero, verdadero_falso,cualquiera, lenguajes, years);
