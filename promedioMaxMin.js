let rl = require('readline-sync');
let n = rl.questionInt('Ingrese un numero: ');
let Max = n
let Min = n
let suma = 0
let contador = 0
while (n!=0) {
    if (n>Max) Max = n
    if (n<Min) Min = n
    contador = contador + 1
    suma = suma + n
    n = rl.questionInt('Ingrese un numero: ');
}
console.log('El maximo es', Max);
console.log('El minimo es', Min);
if (contador!=0) {
    console.log('La media es', suma/contador);
}


