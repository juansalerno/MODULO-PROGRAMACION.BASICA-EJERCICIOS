let nombre = leerTextoDesdeConsola("ingrese su nombre: ");
let apellido = leerTextoDesdeConsola("ingrese su apellido: ");
console.log("Bienvenido ",apellido, ",", nombre);

function leerTextoDesdeConsola(mostrar) {
    let rl = require('readline-sync');
    //let texto = rl.question(mostrar);
    //return texto;
    return rl.question(mostrar);
}