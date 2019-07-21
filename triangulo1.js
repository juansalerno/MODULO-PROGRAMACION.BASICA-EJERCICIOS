let base, altura, i
function areaTriangulo (base, altura) {

    return  (base*altura)/2
}
for (i=1;i<=100;i++) {
console.log('el resultado es:', areaTriangulo(i,i*2));
}
