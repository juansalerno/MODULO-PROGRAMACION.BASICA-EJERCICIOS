let rl = require('readline-sync');
let segundosIngresados = rl.questionInt('Igrese los segundos: ');
let segundosHora = 3600
let segundosMinutos = 60
let horasConDecimal = (segundosIngresados/segundosHora);
let horasEntero = parseInt(horasConDecimal)
let minutos = (segundosIngresados - (horasEntero*segundosHora)) / segundosMinutos
let minutosEnteros =  parseInt(minutos)
let segundos = (segundosIngresados - (horasEntero*segundosHora)) - (minutosEnteros*segundosMinutos)


console.log('El tiempo es: '+ horasEntero, ' h, '+ minutosEnteros+ ' min, '+ segundos+ 'seg.')