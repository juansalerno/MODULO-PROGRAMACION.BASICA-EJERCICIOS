let rl = require('readline-sync');
let nroFilasMatriz1 = rl.questionInt('Ingrese el numero de filas de la matriz 1: ');
let nroColumnasMatriz1 = rl.questionInt('Ingrese el numero de columnas de la matriz 1: ');
let nroFilasMatriz2 = rl.questionInt('Ingrese el numero de filas de la matriz 2: ');
let nroColumnasMatriz2 = rl.questionInt('Ingrese el numero de columnas de la matriz 2: ');
let tabla1 = new Array(nroFilasMatriz1);
let tabla2 = new Array(nroFilasMatriz2);
let filaTabla1, filaTabla2, columnaTabla1, columnaTabla2

for (filaTabla1 = 0; filaTabla1 < nroFilasMatriz1; filaTabla1++) {
    tabla1[filaTabla1] = new Array(nroColumnasMatriz1);
}

for (filaTabla1 = 0; filaTabla1 < nroFilasMatriz1; filaTabla1++) {
    for (columnaTabla1 = 0; columnaTabla1 < nroColumnasMatriz1; columnaTabla1++) {
        tabla1[filaTabla1][columnaTabla1] = Math.floor(Math.random() * 20);
    }
}
console.log(tabla1);
console.log(' ');

for (filaTabla2 = 0; filaTabla2 < nroFilasMatriz2; filaTabla2++) {
    tabla2[filaTabla2] = new Array(nroColumnasMatriz2);
}

for (filaTabla2 = 0; filaTabla2 < nroFilasMatriz2; filaTabla2++) {
    for (columnaTabla2 = 0; columnaTabla2 < nroColumnasMatriz2; columnaTabla2++) {
        tabla2[filaTabla2][columnaTabla2] = Math.floor(Math.random() * 20);
    }
}
console.log(tabla2);
console.log(' ');

let tablaSuma = sumarMatrices(tabla1, tabla2)

if (tablaSuma == null) {
    console.log('Error, las dimensiones de las matries deben ser iguales para poder sumarse.');
} else {
    console.log(tablaSuma);
}

function sumarMatrices(matriz1, matriz2) {
    let i, j
    let matriz3 = new Array(matriz1.length);
    if (matriz1.length == matriz2.length && matriz1[0].length == matriz2[0].length) {
        for (i = 0; i < matriz1.length; i++) {
            matriz3[i] = new Array(matriz1[0].length);
        }
        for (i = 0; i < matriz1.length; i++) {
            for (j = 0; j < matriz1[0].length; j++) {
                matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }
        return matriz3;
    }
    else return matriz3 = null;
}   