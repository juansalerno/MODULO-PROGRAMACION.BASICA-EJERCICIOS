let readlineSync = require('readline-sync');
let frasePrincipal = readlineSync.question('Ingrese la frase principal: ');
let sufijo = readlineSync.question('Ingrese el fragmento que quiere analizar si es sufijo de la frase principal: ');
function esSufijo (fragmento, frase) {
    let longitudFragmento = fragmento.length
    let longitudFrase = frase.length
    if ((frase.indexOf(fragmento)) == (longitudFrase-longitudFragmento)) return true
    else return false
}
console.log(esSufijo(sufijo,frasePrincipal));