let readlineSync = require('readline-sync');
let clave = 'eureka'
let intentosMaximos = 3
let intento = 1
let claveIngresada = readlineSync.question('Por favor, ingrese la clave: ');
while ((claveIngresada!=clave) && (intento<intentosMaximos)) {
    intento = intento + 1
    console.log('LA CLAVE ES INCORRECTA');
    claveIngresada = readlineSync.question('Por favor, ingrese la clave: ');
}   
if (claveIngresada!=clave) {
    console.log ('Has agotado todas las posibilidades');
} 

 


