let rl = require('readline-sync');
let precioUnitario = rl.questionFloat('Ingrese el precio unitario de la fotocopia: $ ');

console.log('El precio unitario por cantidades entre 100 y 200: $ '+ (precioUnitario*0.88));
    console.log('El precio unitario por cantidades entre 201 y 400: $ '+ (precioUnitario*0.85));
    console.log('El precio unitario por cantidades mayores a 400: $ '+ (precioUnitario*0.82));

let cantidades = rl.questionInt('Ingrese la cantidad de fotocopias a hacer: ');

if (cantidades<100) console.log('El precio final es: $ '+ (precioUnitario*cantidades));
    else if (cantidades>=100 && cantidades<=200) console.log('El precio final es: $'+ ((precioUnitario*0.88)*cantidades));
    else if (cantidades>=201 && cantidades<=400) console.log('El precio final es: $'+ ((precioUnitario*0.85)*cantidades));
    else if (cantidades>400) console.log('El precio final es: $'+ ((precioUnitario*0.82)*cantidades));

