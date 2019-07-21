let readlineSync = require('readline-sync');
let frasePrincipal = readlineSync.question('Ingrese la frase principal: ');
let prefijo = readlineSync.question('Ingrese el fragmento que quiere analizar si es prefijo de la frase principal: ');
function esPrefijo (fragmento, frase) {
    if ((frase.indexOf(fragmento)) == 0) return true
    else return false
}
console.log(esPrefijo(prefijo,frasePrincipal));