// Operador ... rest(Juntar)/Spread (espalhar)
//usar rest com parâmetro de função 


//usar o spread com Objeto 
const funcionarios = {nome:'Maria',salario:12348.99}
const clone = {ativo: true, ...funcionarios} // Aqui estou utilizando o spread ... para pegar os atributos de funcionarios e adicionando para clone
console.log(clone);

//spread no contexto de array 
const grupoA = ['joao','Maria','Pedro']
const grupoFinal = ['Maria', ...grupoA,'Rafaela']
console.log(grupoFinal);

