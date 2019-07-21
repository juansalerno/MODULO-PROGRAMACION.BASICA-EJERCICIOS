let rl = require('readline-sync');
let n = rl.questionInt('Ingrese un numero: ');
let nMax = n // seria nMin //
while (n != 0) {
    n = rl.questionInt('Ingrese un numero: ');
    if (n>nMax)  nMax = n  //si fuera minimo sería if (n<nMin) nMin = n //
} console.log('El maximo es', nMax);