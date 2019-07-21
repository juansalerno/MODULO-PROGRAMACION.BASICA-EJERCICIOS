let nombre = leerTextoDesdeConsola('Ingrese su nombre: ');
let apellido = leerTextoDesdeConsola('Ingrese su apellido: ');
console.log('bienvenido', apellido, ',', nombre);

function leerTextoDesdeConsola(mostrar) {
let rl = require('readline-sync');
let texto = rl.question(mostrar);
return texto
}