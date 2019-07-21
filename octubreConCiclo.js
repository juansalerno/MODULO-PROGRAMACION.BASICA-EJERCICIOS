let readlineSync = require('readline-sync');
let mesDeCompraIngresado = readlineSync.question("Indique el mes en el que fue realizada la compra: ");
    
while (mesDeCompraIngresado!="") {     
    if (mesDeCompraIngresado == "octubre") {
        console.log ('Por ser el mes del aniversario de la empresa, el cliente tiene un 15% de descuento en su compra');
        cantidadProducto = readlineSync.questionInt('Indique la cantidad de productos comprados: ');
        precioProducto = readlineSync.questionFloat('Indique el precio del producto: ');
        console.log ('La compra fue por: $'+cantidadProducto*precioProducto);
        console.log ('Sobre la misma, el descuento es de: $'+(cantidadProducto*precioProducto)*0.15);
        console.log ('El precio final de la compra con el descuento es de: $'+(cantidadProducto*precioProducto)*0.85);
        mesDeCompraIngresado = readlineSync.question("Indique el mes en el que fue realizada la compra: ");
      }  else {
        console.log ('El cliente no tiene ningun descuento por esta compra');
        let cantidadProducto = readlineSync.questionInt('Indique la cantidad de productos comprados: ');
        let precioProducto = readlineSync.questionFloat('Indique el precio del producto: ');
        console.log ('El precio total de la compra es:$ '+cantidadProducto*precioProducto);
        mesDeCompraIngresado = readlineSync.question("Indique el mes en el que fue realizada la compra: ");
      } 
}
     
