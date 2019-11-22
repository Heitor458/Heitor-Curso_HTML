function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor Acima do permitido${area}m2.`)
    } else
        return area
}
console.log(area(2,2)); // Retorna 4
console.log(area(2)); // Retorna NaN
console.log(area());// Retorna NaN
console.log(area(2,3,17,22,44)); //Retonar 6
console.log(area(5,5)); // Não Retorna nada pois os valor é acima do permitido 




