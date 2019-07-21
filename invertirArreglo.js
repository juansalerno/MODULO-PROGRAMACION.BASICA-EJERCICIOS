let readlineSync = require('readline-sync');
let dimensionArreglo = readlineSync.questionInt('Ingrese la cantidad de numeros que desea ingresar: ');
let numerosArreglo = new Array (dimensionArreglo);
let indice;
let linea = ''
for (indice = 0; indice<dimensionArreglo; indice++) {
    numerosArreglo[indice] = readlineSync.questionInt('Ingrese el numero de la posicion '+ indice+ ': ');
}

for (indice = dimensionArreglo-1; indice>=0; indice--) {
    linea = linea + numerosArreglo[indice] + ', '
}
console.log('La inversión de los numeros es: ', linea);