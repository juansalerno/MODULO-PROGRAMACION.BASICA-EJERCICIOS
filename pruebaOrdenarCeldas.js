let i, j;

let matriz1 = new Array(2);

for (i = 0; i < 2; i++) {
    matriz1[i] = new Array(2);
}

matriz1[0][0] = 9;
matriz1[0][1] = 1;
matriz1[1][0] = 2;
matriz1[1][1] = 7;

console.log(matriz1);

ordenarCeldas(matriz1,0,0)

console.log(matriz1);

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
function ordenarCeldas(matriz, i, j) {
    let posicion1, posicion2;
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < (matriz[0].length - 1); j++) {
            posicion1 = i;
            posicion2 = j;
            for (k = i; k < matriz.length; k++) {
                for (l = j+1; l < matriz[0].length; l++) {
                    if (compararCeldas(matriz, posicion1, posicion2, k, l) == 1) {
                        posicion1 = k;
                        posicion2 = l;
                    }
                }

            }
            intercambiarCeldas(matriz, i, j, posicion1, posicion2 );
        }

    }

}

function intercambiarCeldas(matriz, a, b, c, d) {
    let aux = matriz[a][b];
    matriz[a][b] = matriz[c][d];
    matriz[c][d] = aux;
}