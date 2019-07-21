let readlineSync = require('readline-sync');
let nroIngresado = readlineSync.questionInt('Ingrese el numero a evaluar si es par o impar: ');

while (nroIngresado <= 0) {
    nroIngresado = readlineSync.questionInt('Ingrese el numero a evaluar si es par o impar: ');
}
if (nroIngresado % 2 == 0) {
        console.log('El numero ingresado es par');
   }   else  {
    console.log('El numero ingresado es impar');
}

