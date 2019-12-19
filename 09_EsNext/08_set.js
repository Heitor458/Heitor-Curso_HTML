// Estrutura Set : Uma estrutura de conjunto uma estrutura não indexada e que não aceita repetição 
const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo')
times.add('Vasco')

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
console.log(times.delete('Flamengo'));
console.log(times.has('Flamengo'));

const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomesSet = new Set (nomes)
console.log(nomesSet); // Irá retornar set {'Raquel','Lucas','julia'} Para mostrar que ele não aceita repetição ele não exibe pela segunda vez o Nome Lucas 

