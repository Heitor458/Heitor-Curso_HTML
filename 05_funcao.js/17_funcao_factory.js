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

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Carolina ',

    }

}
console.log(criarPessoa());

// Exemplo da aula  82.Função Factory #02
function criarProduto(nome, preco, lancamento, ) {
    return {
        nome, preco, lancamento,
        desconto: 0.1,
        setPreco: function (p) {
            this.preco = p
        }
    }
}
console.log(criarProduto('NooteBook', 2199.49, '25/11/2019'));
console.log(criarProduto('Iphone 11', 5199.6525, '01/11/2020'));


function criaProduto1Real(nome, lancamento) {
    // jeito 1 - refaz o corpo
    return {
        nome,
        preco: 1.00,
        lancamento,
        desconto: 0.1
    }

    // jeito 2 - reutiliza outras funcoes
    return criarProduto(nome, 1.00, lancamento)

    // jeito 3
    let produto = criarProduto(nome, 2.00, lancamento)
    produto.preco = 1
    produto.setPreco(1)
    return produto
}




