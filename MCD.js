let rl = require('readline-sync');
let n1 = rl.questionInt('Ingrese el primer numero: ');
let n2 = rl.questionInt('Ingrese el segundo numero: ');
if (n2<n1) {
    let aux = n1;
    n1 = n2;
    n2 = aux;
}
let i
let maximo = 1
for (i=1; i<=n1; i++) {
if(n1 % i == 0 && n2 % i == 0) {
    if (i>maximo) maximo = i
}
}
console.log('El maximo es: '+ maximo);