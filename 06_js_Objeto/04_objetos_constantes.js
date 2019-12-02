// Pessoa -> 123  -> {...} aqui no caso pessoa aponta para um endereço de memória '123' que é de fato onde o objeto é criado  
const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

/* pessoa -> 456 -> {..} aqui no caso estou fazendo que o objeto pessoa ,
para de apontar para o endereço de memoria '123' e aponte para o endereço de memoria '456'*/
//const pessoa = {'Ana'} // Vai dar erro pois pessoa é uma constane , pois não pode atribuir novamente para constante pessoa para um outro objeto !

Object.freeze(pessoa) // aqui estamos congelando o objeto fazendo com que o Objeto não sofra alterações seja elas deletar ,  adicionar e nem mexer nos dados

pessoa.nome = 'Maria'
console.log(pessoa.nome);
pessoa.end = 'Rua Tal '
delete pessoa.nome


// Com o freeze  tornamos o Objeto em si constante , não soamente as referências quais as variaveis apontam 
// congelando os objetos com freeze 
const pessoaConstante = Object.freeze({nome:'Thiago'})
pessoaConstante.nome =  ' Maria'
console.log(pessoaConstante)