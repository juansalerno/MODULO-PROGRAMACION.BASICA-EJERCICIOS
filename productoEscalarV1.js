let readlineSync = require('readline-sync');
let dimensionArreglo = readlineSync.questionInt('Ingrese la cantidad de componentes: ');
let arreglo1 = new Array (dimensionArreglo);
let arreglo2 = new Array (dimensionArreglo);
let resultado = 0;
let suma = 0;
function cargarVector (arreg, dimension) {
    let indice;
    for (indice = 0; indice<dimension; indice++) {
        arreg[indice] = readlineSync.questionInt('Ingrese el numero de la posición'+ indice+ ': ');
    }
}

cargarVector (arreglo1, dimensionArreglo);
cargarVector (arreglo2, dimensionArreglo);

for (indice = 0; indice < dimensionArreglo; indice++) {
    suma = arreglo1[indice] * arreglo2[indice]
    resultado = resultado + suma
}
console.log('El resultado es: '+resultado);