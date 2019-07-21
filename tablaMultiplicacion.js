let readlineSync = require('readline-sync');
let numeroIngresado = readlineSync.questionInt('Imgrese el numero que desea multiplicar: ');
let numeroFinalTabla = readlineSync.questionInt('Ingrese hasta qué numero desea que muestre la tabla de multiplicación: ');
let contador = 1
for (num=contador; contador <= numeroFinalTabla; contador++) {
    console.log(numeroIngresado+'X'+ contador + '='+ numeroIngresado*contador);
}