function cargar(arreglo, cantidad, numAzar) {
let i;
    for (i = 0 ; i<cantidad; i++ ) {
        arreglo[i] = Azar(numAzar);
    }
}

function escribirEnUnaLinea(arreglo, cantidad) {
    let i;
    let linea = ''
        for (i = 0 ; i<cantidad; i++) {
        linea = linea + arreglo[i] + ' ' ;
    }
    console.log (linea);
}

function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] == arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
}

function burbuja(arreglo, cantidad) {
let i, j;
        for (i = 2 ; i < cantidad; i++) {
            for (j = 0 ; j < (cantidad-1); j++) {
                if (comparar(arreglo, j, j+1) == 1 ) {
                    intercambiar(arreglo, j, j+1) ;
            }
        }
    }
}

function Azar(numAzar) {
    return Math.floor(Math.random() * numAzar);
    }

let lim = 10;
let a = new Array(lim);
cargar(a, lim, 100);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);