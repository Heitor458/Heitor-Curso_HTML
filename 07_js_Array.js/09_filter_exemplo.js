// Aqui irei fazer um exemplo de map 
/* estou ustilizando esse exemplo mais simples , por uma questão 
didatica */

// Aqui nesse exemplo vou fazer com que o Array pegue apenas os números multiplos de dois 
// Sem Usar o Filter
const numeros = [2, 3, 6, 5, 10];
let mult2 = []; // Aqui estou criando um array auxiliar para receber os valores mltiplos de dois
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        mult2.push(numeros[i]);
    }
}
console.log(mult2);

// Usando o filter 
const numF = numeros.filter(function (numero) {
    if ((numero % 2 === 0)) {
        return true
    }
    console.log('pritando Numeros Multiplos de dois  com Filter', numF);
})

// Usando o Filter com Arrow Function 
const numerosFiltrados = numeros.filter(numerosFiltrados => numerosFiltrados % 2 === 0)
console.log('Printando Números Multiplos de dois com Filter e Arrow Function', numerosFiltrados);
