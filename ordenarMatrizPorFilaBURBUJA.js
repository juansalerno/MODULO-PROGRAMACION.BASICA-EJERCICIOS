let rl = require('readline-sync');
let nroFilasMatriz1 = rl.questionInt('Ingrese el numero de filas de la matriz 1: ');
let nroColumnasMatriz1 = rl.questionInt('Ingrese el numero de columnas de la matriz 1: ');
let i, j;

let matriz1 = new Array(nroFilasMatriz1);

for (i = 0; i < nroFilasMatriz1; i++) {
    matriz1[i] = new Array(nroColumnasMatriz1);
}

for (i = 0; i < nroFilasMatriz1; i++) {
    for (j = 0; j < nroColumnasMatriz1; j++) {
        matriz1[i][j] = Math.floor(Math.random() * 50);
    }
}
console.log(matriz1);
ordenarFilas(matriz1);
console.log(' ');
console.log(matriz1);

function ordenarFilas(matriz) {
    let i, j;
    for (i = 1; i < matriz.length; i++) {
        for (j = 0; j < (matriz.length - 1); j++) {
            if (compararFilas(matriz, j, j + 1) == 1) {
                intercambiarFilas(matriz, j, j + 1);
            }
        }

    }
}

function compararFilas(matriz, fila1, fila2) {
    let comparacion;
    if (sumarElementosFilas(matriz, fila1) == sumarElementosFilas(matriz, fila2)) {
        comparacion = 0;
    }
    else if (sumarElementosFilas(matriz, fila1) > sumarElementosFilas(matriz, fila2)) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}


function sumarElementosFilas(matriz, fila) {
    let suma = 0;
    let i;
    for (i = 0; i < matriz[0].length; i++) {
        suma = suma + matriz[fila][i];
    }
    return suma;
}


function intercambiarFilas(matriz, filaA, filaB) {
    let i, aux;
    for (i = 0; i < matriz[0].length; i++) {
        aux = matriz[filaA][i];
        matriz[filaA][i] = matriz[filaB][i];
        matriz[filaB][i] = aux;
    }
}