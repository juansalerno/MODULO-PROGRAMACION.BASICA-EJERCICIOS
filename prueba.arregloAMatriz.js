let arreglo1 = new Array(6);
arreglo1[0] = 3;
arreglo1[1] = 5;
arreglo1[2] = 9;
arreglo1[3] = 8;
arreglo1[4] = 1;
arreglo1[5] = 4;

console.log(arreglo1);
let matriz1 = convertirArregloEnMatriz(arreglo1, 6, 3, 3);
console.log(matriz1);

function convertirArregloEnMatriz(arreglo, dimensionArreglo, cantFilas, cantColumnas) {

    if (dimensionArreglo % cantFilas == 0) {
        cantColumnas = dimensionArreglo / cantFilas;
        let matriz = new Array(cantFilas);

        for (let i = 0; i < cantFilas; i++) {
            matriz[i] = new Array(cantColumnas)
        }

        for (let i = 0; i < cantFilas; i++) {
            for (let j = 0; j < cantColumnas; j++) {
                matriz[i][j] = arreglo;
                    
            }
            return matriz;
        }

    }
}
