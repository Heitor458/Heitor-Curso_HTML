/* Exemplo sem a função factory.
const prod1 = {
    nome:'...',
    preco:45
}

const prod2 = {
    nome:'tyj',
    preco: 65
}   */

//  O que é uma factory : É uma função que sempre retorna um novo Objeto 

// Exemplo com Factory Simples 

function criarPessoa(){
    return{
        nome:'Ana' ,
        sobrenome:'Carolina ',

    }

}
console.log(criarPessoa());


function cirarProduto(nome,preco,lancamento,) {
    return {
        nome,preco,lancamento,
        desconto: 0.1
    }
} console.log(cirarProduto('NooteBook',2199.49,'25/11/2019'));
console.log(cirarProduto('Iphone 11', 5199.6525,'01/11/2020'));





