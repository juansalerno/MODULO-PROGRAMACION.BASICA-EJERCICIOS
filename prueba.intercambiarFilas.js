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

intercambiarFilas(matriz1, 2, 4);

console.log(matriz1);


function intercambiarFilas(matriz, filaA, filaB) {
    let i, aux;
    for(i=0; i<matriz[0].length; i++) {
        aux = matriz[filaA][i];
        matriz[filaA][i] = matriz[filaB][i];
        matriz[filaB][i] = aux;
    }
}