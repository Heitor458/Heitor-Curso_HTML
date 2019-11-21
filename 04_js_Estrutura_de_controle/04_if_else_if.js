Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota) {
    if (nota.entre(10, 9)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida');
    }
    console.log('Fim');
}

imprimirResultado(7);
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(-1); //Retornar Nota invalida  pois é menor que zero 
imprimirResultado(2.3);
imprimirResultado(11); // Retorna nota invalida pois é maior que 10
imprimirResultado('Epa');