let rl = require('readline-sync');
let clave = 'eureka';
let MaxIntentos = 3;
let claveLeida = '';
let intento = 0

while (clave!=claveLeida && intento<MaxIntentos) {
claveLeida=rl.question('Ingrese la clave: ');
intento++;
}
if (clave!=claveLeida) {
    console.log('Ud agoto los tres intentos que tenia disponibles');
} //este ultimo if es por si acierta en el tercer intento//