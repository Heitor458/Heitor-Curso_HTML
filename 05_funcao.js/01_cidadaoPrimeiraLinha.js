/*  Função em JS  é First-class: Função pode ser tratado como um dado , e sendo como um dado pode passar como parametro
 e consegue retornar uma função, pode declarar uma variavel, pode ter uma função dentro de uma função tem uma vasta possibilidade 
 Height-Oder-Function = Função de alta order é algo que habilita uma programação funcional */

// Delcarando uma função de forma literal 
function fun1(){

}
/*o return de uma função em JS é opcional você pode ou não retornar um valor de uma função e quando não retorna nada,
por padrão a função retorna o valor undefined */  



// Armazenar uma função em uma variavel podendo ser eles  VAR e LET CONST 
const fun2 = function() {} // Uma função Anonima 

/*Melhor modo para armazenar uma função em um Array:
 Cria uma função Anonima, armazenar em uma variavel e depois colocar dentro de um array */ 

// Armazenar em um Array 
const array = [function(a,b){ return(a+b)},fun1,fun2] 
console.log(array[0](2,3));

// Armazenar em um Atributo de objeto
const obj = {}
obj.falar = function(){ return 'OPA'}
console.log(obj.falar());


// Passar Função como Parametro 
function run(fun){
    fun() // Para chamar uma função é necessário colocar os parenteses 
}
run( function(){console.log('Executando...')})
// Uma função pode retornat e conter uma função 
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
 soma(2,3)(4) // Retorna 9 que é a soma dos valores a+b+c
//  Possivel armazenar o resultado de uma função em uma const para depois executar ela dentro de uma outra função 
const cincoMais = soma(2,3)
cincoMais(4)