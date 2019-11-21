const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado !');
    }else{
        console.log('Reprovado !');
    }
}
imprimirResultado(7);
imprimirResultado(5);
imprimirResultado('EPA !') /*Cuidado com a tipagem fraca pois o console irá retornar Reprovado * /