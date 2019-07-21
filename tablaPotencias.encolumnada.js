let readlineSync = require('readline-sync');
let orientaciontexto = readlineSync.question('Como desea encolumnarlo? (I/D): ');

let i;

console.log(formatear(1, 5, ' ', orientaciontexto), ' ', formatear(2, 5, ' ', orientaciontexto), ' ', formatear(3, 5, ' ', orientaciontexto), ' ', formatear(4, 5, ' ', orientaciontexto), ' ', formatear(5, 5, ' ', orientaciontexto));

for (i=2;i<6;i++) {
    console.log(formatear(i, 5, ' ', orientaciontexto), ' ', formatear(i**2, 5, ' ', orientaciontexto), ' ', formatear(i**3, 5, ' ', orientaciontexto), ' ', formatear(i**4, 5, ' ', orientaciontexto), ' ', formatear(i**5, 5, ' ', orientaciontexto));
}


function formatear (cadena, tamaño, relleno, orientacion) {
    let indice = 0;
    let linea = ''
    cadena = cadena.toString()
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
