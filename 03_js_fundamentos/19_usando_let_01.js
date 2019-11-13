let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero);
}
console.log('Fora = ',numero);
/* Irá retornar Dentro = 2
    Fora = 1
    pois apesar de terem o mesmo valor
    Estão em Escopos Diferentes. 
*/



let numero = 1
{
    let numero2 = 2
    console.log('Dentro =', numero);
}
console.log('Fora = ',numero);
/* Irá printar 1, pois irá proucurar no escopo interno se tem numero, se não tiver vai poucurar em um escopo mais abrangente 
e  printar o valor da variavel do escopo acima */

//Variaveis Definidas com a palavra reservada VAR tem escopo Global escopo de Função.
//Variaveis Defenidas com a palavra reservada LET tem escopo Global escopo de Função e escopo de Bloco. 