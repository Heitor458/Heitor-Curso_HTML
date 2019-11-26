// Estrategia 1 para gerar valor padrao 
function soma1 (a,b,c){
    a == a || 1 // a recebe a OU o valor 1
    b == b || 1
    c == c || 1
    return  a+b+c
}

console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0));


// Estrategia 2,3 e 4 para gerar valor padrão 
function soma2(a,b,c){
    // Se 'a' for diferente de undefined caso for diferente de a  defina o valor como '1'
    a = a != undefined ? a : 1
    // Se dentro de arguments existe  o indeice um se existir pegue o valor de b se não pegue o valor de um 
    b = 1 in arguments ? b : 1
    //  Se a variavel 'c' for NaN retorna '1' e caso ela for um núemro retorne o valor de c ( ESTRATEGIA MAIS SEGURA ) 
    c= isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma2()); // Retorna 3
console.log(soma2(3)); // Retorna 5
console.log(soma2(1,2,3)); // Retorna 6
console.log(soma2(0,0,0)); // Retorna 0

//Valores padrão do (ECMAScript2015) e a forma mais adequado 
function soma3( a = 1, b = 2,c = 1){
    return a+b+c
}
console.log(soma3());
console.log(soma3(3));
console.log(soma3(1,2,3));
console.log(soma3(0,0,0));



