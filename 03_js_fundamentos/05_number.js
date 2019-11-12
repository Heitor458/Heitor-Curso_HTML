//Maneiras diferentes de declarar uma variavel do tipo number
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // Exibe no Console True dizendo que são números inteiros 
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

//Funções associadas aos Dados 
console.log(media)// retorna 7.8709999999999996
console.log(media.toFixed(2)) // retorna 7.87
console.log(media.toString()); // Retorna 7.87 porém em string
console.log(media.toString(2)); // Retorna um Valor binario
console.log(typeof media);







