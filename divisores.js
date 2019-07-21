let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Ingrese el numero sobre el que quiere saber su cantidad de divisores: ');
let num2 = 1
let contador = 0
function esMultiplo (num1,num2) {
    if(num1 % num2 == 0) return resultado = true
    else return resultado = false
}

function cantidadDeDivisores (num1,num2) {
    for (num2=1; num2<=num1; num2++) {
     esMultiplo(num1,num2)
       if (resultado==true) {
           contador = contador + 1
       }
    }   return contador
}   

contador = cantidadDeDivisores(num1,num2)
console.log('La cantidad de divisores es: ', contador)