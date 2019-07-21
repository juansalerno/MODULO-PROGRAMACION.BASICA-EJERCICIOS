let nro = 1
let rdo = 0;
let linea = ''
for (num=1; num<=100; num++) {
    rdo= rdo +nro
    linea = linea + rdo + '  ';
    
    let auxiliar = rdo
    rdo = nro
    nro = auxiliar
    
}  console.log ('0  1  '+ linea);


