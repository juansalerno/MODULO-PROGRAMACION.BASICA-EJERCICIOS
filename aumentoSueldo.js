let readlineSync = require('readline-sync');
let sueldoIngresado = readlineSync.questionInt('Ingrese el sueldo actual a analizar: ');
let aumento20 = sueldoIngresado*0.20
let aumento10 = sueldoIngresado*0.10
let aumento5 = sueldoIngresado*0.05
let sueldoConAumento20 = sueldoIngresado + aumento20
let sueldoConAumento10 = sueldoIngresado + aumento10
let sueldoConAumento5 = sueldoIngresado + aumento5
if (sueldoIngresado>=0 && sueldoIngresado<=15000) {
    console.log ('El aumento sobre el sueldo sera de: $'+ aumento20 );
    console.log ('El sueldo total quedara en: $' + sueldoConAumento20);
}
if (sueldoIngresado>15000 && sueldoIngresado<=20000) {
    console.log ('El aumento sobre el sueldo sera de: $'+ aumento10 );
    console.log ('El sueldo total quedara en: $'+ sueldoConAumento10);
}
if (sueldoIngresado>20000 && sueldoIngresado<=25000) {
    console.log ('El aumento sobre el sueldo sera de: $'+ aumento5 );
    console.log ('El sueldo total quedara en: $'+ sueldoConAumento5);
}
if (sueldoIngresado>25000) {
    console.log ('No corresponde aumento alguno.');
}