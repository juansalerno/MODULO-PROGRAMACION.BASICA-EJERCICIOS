let rl=require('readline-sync');
let N = rl.questionInt('Ingrese el numero sobre el que desea calcular su factorial: ');
let i;
let suma = 1
for (i=1; i<=N; i++) {
    suma = suma * i
}
console.log('El factorial de', N, 'es: ',suma);