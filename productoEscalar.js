let readlineSync = require('readline-sync');
let dimensionArreglo = readlineSync.questionInt('Ingrese la cantidad de componentes: ');
let arreglo1 = new Array (dimensionArreglo);
let arreglo2 = new Array (dimensionArreglo);
let multiplicacionArreglos = new Array (dimensionArreglo);
function cargarVector (arreg, dimension) {
    let indice;
    for (indice = 0; indice<dimension; indice++) {
        arreg[indice] = readlineSync.questionInt('Ingrese el numero de la posicion '+ indice+ ': ');
    }
}

function multiplicarArreglos (arreg1, arreg2, arregloMultiplicacion, dimension) {
    let indice = 0
    for (indice =0; indice<dimension;indice++) {
        arregloMultiplicacion[indice] = arreg1[indice] * arreg2[indice];
    }
}

function sumarComponentesVector (arreg, dimension) {
    let indice = 0;
    let suma = 0;
    for (indice=0;indice<dimension;indice++) {
        suma = suma + arreg[indice];
    } return suma
}

console.log('Cargando arreglo 1...');
cargarVector (arreglo1, dimensionArreglo);
console.log('El arreglo 1 es: '+arreglo1)
console.log('Cargando arreglo 2...');
cargarVector (arreglo2, dimensionArreglo);
console.log('El arreglo 2 es: '+arreglo2);

multiplicarArreglos(arreglo1,arreglo2, multiplicacionArreglos, dimensionArreglo);
let resultado = sumarComponentesVector(multiplicacionArreglos,dimensionArreglo);
console.log('El producto escalar es: '+ resultado);
