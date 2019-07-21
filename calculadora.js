let rl = require('readline-sync');
let numero1 = rl.questionInt('Ingrese el primer numero: ');
let numero2 = rl.questionInt('Ingrese el segundo numero: ');
let opcionMenu = rl.questionInt('Ingrese la opcion, siendo 1 para sumar o 2 para restar: ');

function calcularResultado (numero1, numero2, opcionMenu) {
    let resultado
    if (opcionMenu == 1) {
        resultado = numero1+numero2
    } else if (opcionMenu == 2) {
        resultado = numero1-numero2
    } return resultado;
} 

resultado = calcularResultado(numero1,numero2,opcionMenu) 
console.log('el resultado es: ', resultado);




