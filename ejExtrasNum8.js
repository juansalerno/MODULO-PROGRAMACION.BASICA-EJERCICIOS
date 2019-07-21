let rl=require('readline-sync');
let N
let i;
let suma = 1
let contador = 1
for (contador=1; contador<=10; contador++) {
    N = rl.questionInt('Ingrese el numero '+ contador + ': ');
    factorial(N);
    console.log('El factorial de '+N+ ' es: '+ suma);
    suma = 1
} 

function factorial (N) {
    for (i=1; i<=N; i++) {
    suma = suma * i
    } return suma
}
