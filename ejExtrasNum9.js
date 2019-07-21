let rl=require('readline-sync');
let i = 2
let numIngresado = rl.questionInt('Ingrese un numero: ');
let numMax = numIngresado
let numMin = numIngresado

for (i=2; i<=20; i++) {
    numIngresado = rl.questionInt('Ingrese un numero: ');
    if (numIngresado>numMax) numMax = numIngresado;
    else if (numIngresado<numMin) numMin = numIngresado;
}
console.log('El numero maximo es: '+ numMax);
console.log('El numero minimo es: '+numMin);