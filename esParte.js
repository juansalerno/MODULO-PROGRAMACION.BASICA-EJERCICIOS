let rl = require('readline-sync');
let cadenaPrincipal = rl.question('Ingrese la palabra o frase principal: ');
let palabraContenida = rl.question('Ingrese la palabra que quiere saber si es parte: ');
function esParte (fragmento, frase) {
    if ((frase.indexOf(fragmento)) != -1) {
        return true
    } else return false
}
console.log(esParte (palabraContenida,cadenaPrincipal));