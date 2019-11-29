function getPreco( imposto = 0 , moeda ='$'){
    return ` ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome:'NooteBook',
    preco:4589,
    desc:0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()); // Chamando a função diretamente 
console.log(produto.getPreco()); // Chamando função apartir de um Objeto 

const carro = {
    preco:4990,
    desc:0.20
}
console.log(getPreco.call(carro)); // Chamando apartir do call passando o Objeto 
console.log(getPreco.apply(carro)); // Chamando apartir do apply passando o Objeto 

// Quando eu utilizo a function call , tenho que passar diretamente nos parametros do call cada um dos parametros que será passado para a função.
console.log(getPreco.call(carro, 0.17, '$'));

// Quando utilizo a function Apply tenho que passar os parametros dentro de um Array , assim sendo o primeiro parametro é o objeto que será usado como contexto da função e depois os parametros seguintres 
console.log(getPreco.apply(carro, [0.17,'$']));

/* A diferença entre as dus formas de como passa os Parametros para a chamada da função.
No Caso do Call tem que passar os parametros direto na Função. 
 No caso do Apply tem que passar os parametro dentro de um array */
