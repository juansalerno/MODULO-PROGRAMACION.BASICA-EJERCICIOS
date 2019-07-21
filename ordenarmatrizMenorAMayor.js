let i, j;

let matriz1 = new Array(3);

for (i = 0; i < 3; i++) {
    matriz1[i] = new Array(3);
}

matriz1[0][0] = 3;
matriz1[0][1] = 5;
matriz1[0][2] = 9;
matriz1[1][0] = 8;
matriz1[1][1] = 1;
matriz1[1][2] = 4;
matriz1[2][0] = 6;
matriz1[2][1] = 2;
matriz1[2][2] = 7;

console.log(matriz1);
let matrizOrdenada = ordenarCeldasTodasPosiciones(matriz1);
console.log(' ');
console.log(matrizOrdenada);


function compararCeldas(matriz, a, b, c, d) {
    let comparacion;
    if (matriz[a][b] == matriz[c][d]) {
        comparacion = 0;
    }
    else if (matriz[a][b] < matriz[c][d]) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}


function intercambiarCeldas(matriz, a, b, c, d) {
    let aux;
    aux = matriz[a][b];
    matriz[a][b] = matriz[c][d];
    matriz[c][d] = aux;
}

function ordenarCeldasUnaPosicion(matriz, i, j) {
    let k, l, posicion1, posicion2;
    posicion1 = i;
    posicion2 = j;
    for (k = i; k < matriz.length; k++) {
        for (l = j; l < matriz[0].length; l++) {
            if (compararCeldas(matriz, posicion1, posicion2, k, l) == 1) {
                posicion1 = k;
                posicion2 = l;
            }
        }
        intercambiarCeldas(matriz, i, j, posicion1, posicion2);
    }
}


function ordenarCeldasTodasPosiciones(matriz) {
    for (let a = 0; a < (matriz.length - 1); a++) {
        for (let b = 0; b < matriz[0].length; b++) {
            ordenarCeldasUnaPosicion(matriz, a, b);
        }
    }
    return matriz;
}