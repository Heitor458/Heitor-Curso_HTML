/*  Aqui iremos exibir explicitamente 
as Diferenças no código Imperativo e Declarativo.*/

const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'maria', nota: 9.2 }
]
//  Imperativa 
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

//  Declarativo 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);


/*Na forma imperativa  o passo a passo ou como a forma irá acontecer é muito importante */

/* Declarativo: Nessa Forma você diz através do código apenas  o que tem que ser feito 
e ela seá feita tudo por de baixo dos panos.   
é mais interessante ser utilizado.
pois possibilita reutilizar o código de  diversas maneiras !! *
*/