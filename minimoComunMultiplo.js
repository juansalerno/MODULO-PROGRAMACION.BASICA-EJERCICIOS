let rl = require('readline-sync');
let n1 = rl.questionInt('Ingrese primer numero: ');
let n2 = rl.questionInt('Ingrese el segundo numero: ');
if(n2<n1) {
    let aux = n1;
    n1 = n2;
    n2 = aux;
}
let minimo = 100000000
for (let i=100000000; i>n2; i--) {
    if (i % n1 == 0 && i % n2 == 0) {
         if (i<minimo) minimo = i
    } 
 } console.log(minimo)

