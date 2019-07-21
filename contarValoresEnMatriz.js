let rl = require('readline-sync');
let nroFilas = rl.questionInt('Ingrese el numero de filas: ');
let nroColumnas = rl.questionInt('Ingrese el numero de columnas: ');
let tabla = new Array(nroFilas);
let fila, columna

for (fila = 0; fila < nroFilas; fila++) {
    tabla[fila] = new Array(nroColumnas)
}

for (fila = 0; fila < nroFilas; fila++) {
    for (columna = 0; columna < nroColumnas; columna++) {
        tabla[fila][columna] = Math.floor(Math.random() * 20)

    }
}
console.log(tabla);

let promedioTabla = promediarMatriz(tabla, nroFilas, nroColumnas)

console.log('El promedio de la matriz es: ' + promedioTabla);

let valorDeAnalisis = 10
let contadorTabla = analizarValoresMatriz(tabla, valorDeAnalisis);

console.log('La cantidad de valores que superan al número ' + valorDeAnalisis + ' son: ' + contadorTabla)

function promediarMatriz(matriz, cantI, cantJ) {
    let suma = 0;
    let i;
    let j;
    let promedio;
    for (i = 0; i < cantI; i++) {
        for (j = 0; j < cantJ; j++) {
            suma = suma + (matriz[i][j]);
        }
    }
    promedio = suma / (cantI * cantJ);
    return promedio;
}

function analizarValoresMatriz(matriz, valor) {
    let contador = 0
    let i;
    let j;
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] > valor) contador++;
        }
    }
    return contador
}
