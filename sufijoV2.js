let rl = require('readline-sync');
let sufijo = rl.question('Ingrese el sufijo: ');
let cadenaIngresada = rl.question('Ingrese la frase: ');
let longitudSufijo = sufijo.length
let finCadenaIngresada = cadenaIngresada.length;
let inicioCadenaIngresada = finCadenaIngresada - longitudSufijo;

function esSufijo (cadena,sufijo,inicioCadena,finCadena) {
    let frase = cadena.substring(inicioCadena,finCadena)
    if (frase == sufijo) {
        return true
    }
        else return false
}

console.log(esSufijo(cadenaIngresada,sufijo,inicioCadenaIngresada,finCadenaIngresada))


