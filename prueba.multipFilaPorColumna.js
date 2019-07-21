let rl = require('readline-sync');
let nroFilasMatriz1 = rl.questionInt('Ingrese el numero de filas de la matriz 1: ');
let nroColumnasMatriz1 = rl.questionInt('Ingrese el numero de columnas de la matriz 1: ');
let nroFilasMatriz2 = rl.questionInt('Ingrese el numero de filas de la matriz 2: ');
let nroColumnasMatriz2 = rl.questionInt('Ingrese el numero de columnas de la matriz 2: ');
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

let matriz2 = new Array(nroFilasMatriz2);

for (i = 0; i < nroFilasMatriz2; i++) {
    matriz2[i] = new Array(nroColumnasMatriz2);
}

for (i = 0; i < nroFilasMatriz2; i++) {
    for (j = 0; j < nroColumnasMatriz2; j++) {
        matriz2[i][j] = Math.floor(Math.random() * 50);
    }
}

console.log(matriz1);
console.log(' ');
console.log(matriz2);

let resultado = multiplicarFilaPorColumna(matriz1,matriz2,0,0);
console.log(resultado);

function multiplicarFilaPorColumna (matrizA, matrizB,nroFila,nroCol) {
    let i;
    let suma = 0;
    for(i=0; i<matrizB.length; i++) {
        suma = suma + matrizA[nroFila][i] * matrizB[i][nroCol]
    }
    return suma
}