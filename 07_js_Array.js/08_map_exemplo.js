//  Aqui irei fazer um exemplo de map 
/* estou ustilizando esse explo mais simples , por uma questão 
didatica */

// Aqui primeiro iremos utilizar com for sem usar map 

const numeros = [2, 3, 6, 5, 10];
let novaArrow = []
for (let i = 0; i < numeros.length; i++) {
    novaArrow.push(numeros[i] * 2)
}

const novoArayMap = numeros.map(function (numero) {
    return numero * 2;
})
const arrayMapArrow = numeros.map(numero => numero * 2)
console.log('arrayMapArrow', arrayMapArrow);

//  Utilizando Map com Arrow Function 

const numeros2 = [6, 7, 8, 9, 10]
const numero2 = numeros2.map(numeros2 => numeros2 * 2)
console.log(numero2);


// Outro Exemplo utilizando Arrow function e Map 
const nomes = ['Killer', 'Heitor', 'Guilherme', 'Ricardo']
const nomes2 = nomes.map(nomes2 => nomes2.toLocaleLowerCase())

console.log(nomes2);
