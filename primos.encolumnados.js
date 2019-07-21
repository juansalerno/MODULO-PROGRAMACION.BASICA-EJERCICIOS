function esPrimo (nro) {
    for (let i=2; i<nro; i++) {
        if (nro % i == 0) {
            return false
        }
    } return true
}
let rl = require('readline-sync');
let orient = rl. question('Como desea orientar los numeros? (I/D): ');

    for ( let j=2; j<100; j++) {
        if ( esPrimo(j) ) {
          console.log(formatear(j,3,' ', orient))
    }   
}

function formatear (cadena, tamaño, relleno, orientacion) {
    let indice = 0;
    let linea = ''
    cadena = cadena.toString();
    let largoCadena = cadena.length;
    if (orientacion == 'D') {
        for (indice = 0; indice < (tamaño-largoCadena); indice++) {
            linea = linea + relleno;
        }  return linea + cadena 
    } 
    else if (orientacion == 'I') {
        for (indice = (tamaño-largoCadena); indice > 0; indice--) {
            linea = linea + relleno;
        } return cadena + linea
    }
}