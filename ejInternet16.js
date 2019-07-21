let rl = require('readline-sync');
let num1 = rl.questionInt('Ingrese el primer numero: ');
let num2 = rl.questionInt('Ingrese el segundo numero: ');
let linea = ''
if (num1>num2) {
    let auxiliar = num1;
    num1 = num2
    num2 = auxiliar
}

for (let i=1; i<=num1; i++) {
    if ((num1 % i == 0) && (num2 % i == 0)) {
        linea = linea + i + ' ';
    }
} console.log('Los divisores comunes entre ambos numeros son: '+linea);