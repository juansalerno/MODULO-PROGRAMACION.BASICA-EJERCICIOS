let rl = require('readline-sync');
let n = rl.questionInt('Ingrese la potencia que quiere aplicar: ');
let x = rl.questionInt('Ingrese el numero al que quiere aplicar la potencia: ');
let i = 1;
let resultado = 1;

for (i=1; i<=n; i++) {
    resultado = resultado * x
}
console.log('El resultado de la potencia es: '+resultado);