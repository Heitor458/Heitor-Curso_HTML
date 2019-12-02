const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso:13
}
console.log(Object.keys(pessoa)) // Retorna todas as chaves de um Objeto ['nome','idade','peso']
console.log(Object.values(pessoa)); // Retorna todo os valores do Objeto pesso ['Rebeca','2','13']
console.log( Object.entries(pessoa)); // Retorna todos os Arrays com sub Arras com suas respectivas chaves e valores [['nome','Rebeca'],['idade',2],['peso', 13]]

// Object.entries(pessoa).forEach(([chave, valor])) => {
//     console.log(`${chave}:${valor}`)  
// }) 


//Com essa Função  eu consigo definir uma propriedade de um Objeto e  assim definindo as caracteristicas dessa  propriedade , se ela pode ser alterada , se ela ficara visivel ou não 
Object.defineProperty(pessoa,'dataNascimento', {
    enumerable : true, // Aqui estou dizendo se ela  pode ser listada 
    writable: false , // Se ele pode ou não ser modificada 
    value: '01/01/2017' // Colocando o Valor da Variavel 
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa));

// Object.assign (ECMAScript 2015) é o método usaodo para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais Objetos de origem para um Objeto Destino.
const target = {a:1 ,b:2 ,};
const source = {b:4, c: 5 };

const returnedTarget =  Object.assign(target,source);
console.log(target);
// Retorno Esperado : Object {a:1 ,b:4, c:5}

console.log(returnedTarget);
// Retorno Esperado : Object {a:1 ,b:4, c:5}

// Caso houver valores repetidos ele irá sobrescrever o valor 
Object.freeze(obj)
Obj.c = 1234
console.log(obj);
