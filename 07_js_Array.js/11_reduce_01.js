/*Reduce: o Reduce tem como Função de 
Reduzir um array  Ele iterará por cada elemento dessa lista com o objetivo
de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. 
Lembrando que não ficamos presos apenas a números. */


const alunos = [
    { nome: 'Cassio', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}, 10) // aqui estou passando o valor inicial 
console.log(resultado);


var arrray = [0, 1, 2, 3, 4, 5, 6];
var total = arrray.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} Total até o momento `);
    console.log(`${numero} Valor Atual`);
    console.log(`${indice} Indice Atual`);
    console.log(`${original} Array Original`);
    return acumulador += numero
}, 0)
const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
    b.reduce((acumulador, elemento) => acumulador += elemento, 0))
console.log(ab);
console.warn('Acabou');
console.log(total);

//Veja outros exemplo em: https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
