const nome = 'Rebeca'
const concatenacao =' Olá' + nome + '!'
const template= `
    Olá
    ${nome}!` // Faz a interpolação do Texto 
console.log(concatenacao,template);


//Expressoes..
console.log(`1+1=${1+1}`); // Retorna 1+1 = 2 código utilizado para exibir expressoes númericas 

const up = texto => texto.toUpperCase() 
console.log(`Ei...${up('Cuidado')}!`); // Retorna Ei CUIDADO !
