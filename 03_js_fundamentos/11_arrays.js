/* Array é uma estrutura unidirecional
 que você consegue agrupar multiplos valores
de uma forma linear de uma forma indexada. 

Em JS o Array é heteregênio e NAO tem um tamanho Fixo 
*/

const valores = [7.7, 8.9, 6., 5.4] //Criando um Aray
console.log(valores[0],valores[3]); // Vai ler os valores do Array 
console.log(valores[4]); // Vai retornar com Undefined pois não há o index  4

valores[4]=10 // Altera Ou Adiciona Valores no Index do Array 
console.log(valores[4]);
console.log(valores.length);// Vai retornar quantos elementos temos no Array 

valores.push({id: 3}, false , null, 'Texto') // Serve Para Adicionar Novos elementos no Array. e aceita Multiplos Valores.
console.log(valores);

// Não é boa Prática misturar dados no array sempre prezar por fazer um Array com tipos de dados homogêneos.

console.log(valores.pop()); // A função POP retira o último valor  do Array.
delete valores[0] // Retira o elemento de Index 0.
console.log(valores);

console.log(typeof valores); // Retorna uma String indicando o tipo do operando nesse caso um Object.






