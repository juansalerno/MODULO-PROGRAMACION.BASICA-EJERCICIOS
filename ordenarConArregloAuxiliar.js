let rl = require('readline-sync');
let cantidadNumeros = rl.questionInt('Ingrese la cantidad de numeros del arreglo a ordenar: ');
let arregloA = new Array(cantidadNumeros);
let arregloAux = new Array(cantidadNumeros);

cargarArreglo(arregloA, cantidadNumeros, 100);
mostrarEnUnaLinea(arregloA, cantidadNumeros);
imprimirOrdenado(arregloA, arregloAux, cantidadNumeros);


function cargarArreglo(arreglo, dimension, num) {
    let i;
    for (i = 0; i < dimension; i++) {
        arreglo[i] = Math.floor(Math.random() * num);
    }
}

function mostrarEnUnaLinea(arreglo, dimension) {
    let i;
    let linea = '';
    for (i = 0; i < dimension; i++) {
        linea = linea + arreglo[i] + ' ';
    }
    console.log(linea);
}

function intercambiar(arreglo, i, j) {
    let auxiliar;
    auxiliar = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = auxiliar;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] == arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1
    }
    return comparacion;
}

function imprimirOrdenado(a, aux, n) {
    let i, j, posicion
    for (i = 0; i < n; i++) {
        aux[i] = a[i];
    }
    for (i = 0; i < (n - 1); i++) {
        posicion = i;
        for (j = i + 1; j < n; j++) {
            if (comparar(aux, posicion, j) == 1) {
                posicion = j;
            }
        }
        intercambiar(aux, i, posicion);
    }
    console.log(aux);
}