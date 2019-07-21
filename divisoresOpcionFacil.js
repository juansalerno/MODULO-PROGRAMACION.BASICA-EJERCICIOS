let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Ingrese el numero sobre el que quiere saber su cantidad de divisores: ');
let i = 1
let contador = 0

function cantidadDeDivisores (num1) {
    for (i=1; i<=num1; i++) {
    if (num1 % i == 0) {
        contador = contador + 1
        }   
    }   return contador
}
contador = cantidadDeDivisores(num1);
console.log('La cantidad de divisores es: ', contador);
