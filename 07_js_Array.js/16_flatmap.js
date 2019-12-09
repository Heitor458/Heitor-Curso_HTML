// Exercicois com flat map
const escola = [{
    nome: 'Turma',
    alunos: [{
        nome: 'Ana',
        nota: 8.3
    }, {
        nome: ' Gustavo',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));
Array.prototype.flatMap = function (callback) {
    return Arrray.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);

/*Aqui vou passsar a turma que dentro da turma tenho a lista de alunos
e através do map vou converter objetos do tipo aluno para apenas a nota do aluno */

// Motivos de usar um FlatMap:
// Um flatMap é um map associado com concat 
// Ao invés de ter um array de array vou ter penas um array  com todos os dados