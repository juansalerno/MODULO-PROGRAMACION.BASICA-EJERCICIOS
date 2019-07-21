let rl = require('readline-sync');
let cantidadPersonas = rl.questionInt('Ingrese la cantidad de personas a analizar: ');
let nombres = new Array(cantidadPersonas);
cargar(nombres, cantidadPersonas)
let edad = new Array(cantidadPersonas);
cargarAleatorio(edad, cantidadPersonas, 95);
let altura = new Array(cantidadPersonas);
cargarAleatorio(altura, cantidadPersonas, 250);

mostrarArreglos(nombres, edad, altura, cantidadPersonas);

console.log(' ');

seleccion(edad, altura, nombres, cantidadPersonas);

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

function seleccion(arreglo1, arreglo2, arreglo3, dimension) {
    let i, j;
    for (i = 0; i < (dimension - 1); i++) {
        let posicion = i;
        for (j = i + 1; j < dimension; j++) {
            if (comparar(arreglo1, posicion, j) == 1) {
                posicion = j;
            } else if (comparar(arreglo1, posicion, j) == 0) {
                if (comparar(arreglo2, posicion, j) == 1) {
                    posicion = j
                }
            }
        }
        intercambiar(arreglo1, i, posicion);
        intercambiar(arreglo2, i, posicion);
        intercambiar(arreglo3, i, posicion);
    }
}

