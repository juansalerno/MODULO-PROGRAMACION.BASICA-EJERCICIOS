let rl = require('readline-sync');
let num1 = rl.questionInt('ingrese num 1: ');
let num2 = rl.questionInt('Ingrese numero 2: ');
let suma = 0
let contador = num1
for (contador = num1; contador<=num2; contador=contador+1) {
    suma = suma + contador
} console.log('la suma es:' , suma);