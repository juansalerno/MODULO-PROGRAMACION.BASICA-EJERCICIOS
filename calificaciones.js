readlineSync = require('readline-sync');
let nombreIngresado = readlineSync.question('Ingrese el nombre del alumno: ');
let nota1
let nota2
let nota3
let promedio 
while (nombreIngresado) {
    nota1 = readlineSync.questionInt('Ingrese la nota de la parte practica: ');
    nota2 = readlineSync.questionInt('Ingrese la nota de la parte de problemas: ');
    nota3 = readlineSync.questionInt('Ingrese la nota de la parte teorica: ');
            if ((nota1>=0 && nota1<=10) && (nota2>=0 && nota2<=10) && (nota3>=0 && nota3<=10)) { 
            promedio = (nota1*0.10)+(nota2*0.50)+(nota3*0.40);
            console.log('La nota final es: '+ promedio);
    }           else  {
        console.log('Error, las notas deben estar entre el 0 y el 10');
        nombreIngresado = readlineSync.question('Ingrese el nombre del alumno: '); 
    }                     
}
    
               

