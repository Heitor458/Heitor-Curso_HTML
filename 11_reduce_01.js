/*Reduce: o Reduce tem como Função de 
Reduzir um array  Ele iterará por cada elemento dessa lista com o objetivo
de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. 
Lembrando que não ficamos presos apenas a números. */

// O EXEMPLO ABAIXO NÃO PERTENCE AO CONTEUDO DA AULA FOI RETIRADO DO: https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
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
/* Exemplo de Cachorro Gato */
/* Utilizando o filter (pra filtrar, duh), o map (para realizar o calculo em cada elemento) e o reduce (para somarmos tudo) */ 
const animais = [
    {
        nome: 'Fumaca',
        idade: 3,
        tipo: 'Cachorro'
    },
    {
        nome: 'Tobby',
        idade: 6,
        tipo: 'Cachorro'
    },
    {
        nome: 'Rock',
        idade: 1,
        tipo: ' Gato'
    },
    {
        nome: 'Nutella',
        idade: 3,
        tipo:'Cachorro'

    },
];

idadeCachorro = animais.filter((animais) => animais.tipo === 'Cachorro').map((Cachorro) => Cachorro.idade*7).reduce((total,Cachorro) => total += Cachorro)
idadeCachorro = animais.reduce((total,elemento) => {
    if (elemento.tipo === 'Cachorro') return total += (elemento.idade *= 7);
    else return total },0
)

