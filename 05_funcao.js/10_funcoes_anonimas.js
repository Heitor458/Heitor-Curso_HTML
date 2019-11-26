const soma = function(x,y){
    return y+x
}
const imprimirresultado = function(a,b,operacao=soma){
    console.log(operacao(a,b)); // retorna no console o resultado 7
    
}
imprimirresultado(3,4) // retorna no console o resultado 7
imprimirresultado(3,4,soma)
imprimirresultado(3,4, function(x,y){ // Retorna o valor de -1 
    return x -y
})