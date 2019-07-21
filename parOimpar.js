let readlineSync = require('readline-sync');
let nroIngresado = readlineSync.questionInt('Ingrese el numero a evaluar si es par o impar: ');
let resultadoPar = nroIngresado % 2 == 0
if (nroIngresado == 0) {
    console.log ('El número ingresado es cero, el mismo es par');
}   else if (resultadoPar) {
        console.log('El numero ingresado es par');
    }   else    {
            console.log('El numero ingresado es impar');
}