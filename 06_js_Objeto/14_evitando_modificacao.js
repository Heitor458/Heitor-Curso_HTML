// Object.prevenExtensions: Aqui fazemos com que nosso Objeto não receba mais atributos , podendo excluir , msa sem adicionar 
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco:1.99,
    tag:'promoção'
})

console.log('Extensível',Object.isExtensible(produto)); // A função isExtensible verifica se a Fução foi criada com preventExtensions com sucesso 

produto.nome = 'Borracha'
produto.descricao = 'Borracha Branca' // Aqui não é permitido adicionar atributos 
delete produto.tag
console.log(produto);

//Object.seal : Serve para selar  o Objeto aqui nesse caso não podemos adicionar , nem excluir novos atributos do Objeto apenas modificar os existentes 
const pessoa = {nome:'Ana',idade:35}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa)); // verifica se o Objeto pessoa Foi selado com sucesso  espera retornar: True.

pessoa.sobrenome = 'Silva' // Não é possivel adicionar o atributo sobreNome 
delete pessoa.nome //Não é possivel deletar o atributo nome 
pessoa.idade = 22 // Aqui é possivel Editar o Valor de um Atributo 
console.log(pessoa);


//Object.freeeze =  Objetos Selado + Valores constantes  não consegue incluir valores nem exclir e nem modificar os valores de seus atributos 
const carro = {fabricante:'Toyota', ano: 2005}
Object.freeze(carro)
carro.velMax = 500
console.log('Gravavel',Object.isW);

delete carro.fabricante
console.log(carro);
