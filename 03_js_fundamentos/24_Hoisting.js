//Efeito Hoisting: Hoisting é o comportamento padrão do Javascript que move a declaração para o topo! 

console.log( 'a = ', a);
var a = 2
console.log('a = ',a);

// O Efeito Hoisting não funciona com variavis declarada com a plavra reservada Let 
console.log('b = ', b);
let b = 2
console.log('b = ', b);
// console irá retornar que a variavel b não foi definida "b is not defined"



