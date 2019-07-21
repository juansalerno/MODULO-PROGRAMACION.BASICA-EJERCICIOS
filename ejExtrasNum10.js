let rl = require('readline-sync');
let n = rl.questionInt('Ingrese la potencia que le quiere aplicar al número 2: ');
let i;
let resultado = 1

for (i=1;i<=n;i++) {
    resultado = resultado * 2
}
console.log('El resulado de la potencia es: ' + resultado);