const alunos = [
    { nome: 'Heitor', nota: 7.3, bolsista: true },
    { nome: 'Caio', nota: 9.2, bolsista: false },
    { nome: 'Marv', nota: 9.8, bolsista: true },
    { nome: 'Alan', nota: 8.8, bolsista: false },
]
// Desafio 1 : Todos os alunos são bolsista ?
const saoBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(saoBolsista)); // Retorna como False 

//  Desafio 02 algum aluno é bolsita ? 
 const algumBolsista = (resultado,bolsista) => resultado || bolsista //
 console.log(alunos.map(a =>a.bolsista).reduce(algumBolsista));
 


