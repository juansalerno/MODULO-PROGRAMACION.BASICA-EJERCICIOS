let readlineSync = require('readline-sync');
let cantidadProducto = readlineSync.questionInt('Indique la cantidad de productos comprados: ');
let precioProducto = readlineSync.questionFloat('Indique el precio del producto: ');
let mesDeCompra = readlineSync.questionInt('Indique el numero de mes en el que fue realizada la compra: ');
let compraTotal = cantidadProducto*precioProducto
let descuento = compraTotal*0.15
let compraConDescuento = compraTotal - descuento
if (mesDeCompra == 10) {
    console.log ('Por ser el mes del aniversario de la empresa, el cliente tiene un 15% de descuento en su compra');
    console.log ('La compra fue por: $'+compraTotal);
    console.log ('Sobre la misma, el descuento es de: $'+descuento);
    console.log ('El precio final de la compra con el descuento es de: $'+compraConDescuento);
} else {
    console.log ('El cliente no tiene ningun descuento por esta compra');
    console.log ('El precio total de la compra es:$ '+compraTotal);
}