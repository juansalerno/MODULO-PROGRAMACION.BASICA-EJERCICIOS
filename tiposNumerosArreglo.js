let readlineSync = require('readline-sync');
let indice
let positivos = 0
let negativos = 0
let ceros = 0

let dimensionArreglo = readlineSync.questionInt('Ingrese la cantidad de numeros que desea ingresar: ');
let arregloNumeros = new Array (dimensionArreglo)
for (indice = 0; indice < dimensionArreglo; indice++) {
    arregloNumeros[indice] = readlineSync.questionInt('Ingrese el numero de la posicion '+ indice+ ' : ');
    if (arregloNumeros[indice] > 0) positivos++ 
    else if (arregloNumeros[indice] < 0) negativos++
    else if (arregloNumeros[indice] == 0) ceros++
}
console.log(positivos+ ' positivos, '+ negativos+ ' negativos, y '+ ceros+ ' ceros.');