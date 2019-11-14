// Exemplos de Operadores Destructuring ( Novo Recurso do ES2015)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua ABC',
        numero: 1000,
        cep:666,
    }
}
// se você quiser pegar as variaveis do objeto pessoa você teria que atribuir um a um 
const nome1 = pessoa.nome
const idade1 = pessoa.idade
console.log(nome1, idade1);

// Com Destructing você consegue associar múltiplos atributos sem ficar repetindo 
// Quero ter acesso as Atributosi da const pessoa usando O Destructuring
const { nome, idade } = pessoa //  passamos os atributos que queremos tirar de dentro do Objeto  e por último declaramos qual o  objeto  nesse caso Pessoa  
console.log(nome, idade);

const { nome: n, idade: i } = pessoa // Aqui extraimos os atributos nome e idade  da estrutura objeto as variaveis nome e idade e renomeamos 
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const {endereco: { numero,cep,logradouro } } = pessoa
console.log(numero,cep,logradouro);

// const {conta:{ ag,num } }=pessoa // Vai retornar como 'ag' undefined or null pois esses Atributos não consta no Objeto 
// console.log(ag,num);



// const{conta:{ agencia,numero } } = pessoa
// console.log(agencia,numero);
  



