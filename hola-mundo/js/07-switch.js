'use strict'
//Swtich

var edad = 453;
var imprime = " ";

switch (edad) {
  case 18:
  imprime = "acabas de cumplir la mayoria de edad";
    break;
    case 25:
      imprime = "Ya eres un adulto";
      break;
      case 40:
      imprime = "Crisis de los cuarenta";
        break;
    case 75:
      imprime = "ya eres un anciano"
      break;
    default:
    imprime = "Tu edad es neutra";
    break;

}

console.log(imprime);
