function soma (){
    let soma =0
    for ( i in arguments ){
          soma += arguments[i]
    }
    return soma
}
// Passando parametros 
console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));

console.log(soma(1.1,2.2,'TESTE'));
console.log(soma('a','b','c'));







// Arguments é um Array interno , toda função possui esse Array disponivel 