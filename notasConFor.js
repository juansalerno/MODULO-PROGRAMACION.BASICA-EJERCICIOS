let readlineSync = require('readline-sync');
let nota 
let suma = 0
let promedio 
let contador = 1
for (contador = 1; contador<=10; contador++) {
    nota = readlineSync.questionInt('Ingrese una nota:');
    suma = suma + nota;
}
promedio = suma/10
console.log('El promedio de las notas es: ' + promedio);
