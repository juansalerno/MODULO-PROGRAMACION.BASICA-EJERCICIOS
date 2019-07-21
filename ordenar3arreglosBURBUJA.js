let rl = require('readline-sync');
let cantidadPersonas = rl.questionInt('Ingrese la cantidad de personas a analizar: ');
let nombres = new Array(cantidadPersonas);
let edad = new Array(cantidadPersonas);
let altura = new Array(cantidadPersonas);

cargar(nombres, cantidadPersonas)
cargarAleatorio(edad, cantidadPersonas, 90);
cargarAleatorio(altura, cantidadPersonas, 250);
mostrarArreglos(nombres, edad, altura, cantidadPersonas);

console.log(' ');

burbuja(edad, altura, nombres, cantidadPersonas);

mostrarArreglos(nombres, edad, altura, cantidadPersonas);


function cargar(arreglo, dimension) {
    let i;
    for (i = 0; i < dimension; i++) {
        arreglo[i] = rl.question('Ingrese el nombre de la persona ' + (i + 1) + ': ');
    }

}

function azar(numAzar) {
    return Math.floor(Math.random() * numAzar)
}

function cargarAleatorio(arreglo, dimension, num) {
    let i;
    for (i = 0; i < dimension; i++) {
        arreglo[i] = azar(num)
    }
}

function mostrarArreglos(arreglo1, arreglo2, arreglo3, dimension) {
    let i;
    for (i = 0; i < dimension; i++) {
        console.log(arreglo1[i] + '  ' + arreglo2[i] + '  ' + arreglo3[i]);

    }
}

function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] == arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1
    }
    else {
        comparacion = 1
    }
    return comparacion;
}

function burbuja(arreglo1, arreglo2, arreglo3, dimension) {
    let i, j;
    for (i = 1; i <= dimension; i++) {
        for (j = 0; j < (dimension - 1); j++) {
            if (comparar(arreglo1, j, j + 1) == 1) {
                intercambiar(arreglo1, j, j + 1);
                intercambiar(arreglo2, j, j + 1);
                intercambiar(arreglo3, j, j + 1);
            } else if (comparar(arreglo1, j, j + 1) == 0) {
                if (comparar(arreglo2, j, j + 1) == 1) {
                    intercambiar(arreglo1, j, j + 1);
                    intercambiar(arreglo2, j, j + 1);
                    intercambiar(arreglo3, j, j + 1);
                }
            }
        }
    }
}

