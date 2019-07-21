let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionFloat('Ingrese el primer numero: ');
let nro2 = readlineSync.questionFloat('Ingrese el segundo numero: ');
let nro3 = readlineSync.questionFloat('Ingrese el tercer numero: ');
if (nro1>nro2 && nro1>nro3) {
    console.log ('El mayor número de los tres es el: ' + nro1);
}
if (nro2>nro1 && nro2>nro3) {
    console.log ('El mayor número de los tres es el: ' + nro2);
} 
if (nro3>nro1 && nro3>nro2) {
    console.log ('El mayor número de los tres es el: ' + nro3);
}
        