let rl = require('readline-sync');
let cadena = rl.question('Ingrese la frase: ');
let cantLetras = cadena.length;
let textoMinus = cadena.toLowerCase();

let arregloTexto = textoMinus.split('');

function ocurrenciaLetra(arreglo, cantidad, caracter) {
    let ocurrencia = 0;
    for (let indice = 0; indice < cantidad; indice++) {
        if (arreglo[indice] == caracter) ocurrencia++
    }
    return ocurrencia;
}
let linea = '';
for (let indice = 0; indice < cantLetras; indice++) {
    linea = linea + arregloTexto[indice].replace(' ', '');
}
let cantLetras2 = linea.length;
let arregloTexto2 = linea.split('')

for (let indice = 0; indice < cantLetras2; indice++) {
    console.log('La letra ' + arregloTexto2[indice] + ' aparece ' + ocurrenciaLetra(arregloTexto2, cantLetras, arregloTexto2[indice]), 'la probabilidad de ocurrencia es: ' + (ocurrenciaLetra(arregloTexto2, cantLetras, arregloTexto2[indice]) / cantLetras))
}


