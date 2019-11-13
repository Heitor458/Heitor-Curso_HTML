/* Função é como una ação que irá executar
Uma Sentença de Código.
A função define um bloco, os blocos são delimitados por chaves,
então você tem a função em seguida  o corpo da função que são os blocos,
no qual tem todas a sentença de códigos que será executada quando você chamar a função.
Existem Funções anonimas que são funções sem nome.( não irá aparecer nessa aula.)
*/
 
//Função sem Retorno
function ImprimirSoma(a,b){
    console.log(a + b);
 }
//Modos de passar parâmetros
 ImprimirSoma()
 ImprimirSoma(2,3)
 ImprimirSoma(1,2,3,4,5,6,7,8)

 //Função com Retorno
 function soma(a , b = 0){
     return a + b
 }
 console.log(soma(2,3));
 console.log(soma(2)); // Retona dois pois declarei que por padrão o valor da variável b é igual a zero.
 
 
 