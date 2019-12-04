/* Map : O map serve para mapear de um Array para o outro.
     Fazendo uma transformação no Array 
    Mapear um Aray para um outro array do mesmo tamanho.
    Exemplo quero transformar um array pra que o outro array 
    tenha o mesmo tamanho do primeiro porém com valores duplicados.
    Regra Geral: se o array original tem ceis elementos 
    irá gerrar um array de ceis elementos porém com os dados transformados 
*/

const nums = [1, 2, 3, 4, 5]

// Map é um for com proposito 

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = function (e) {
    return e + 10
}

const tirplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`// parsefloat : , tofixed(2): para fixa em duas cassas decimais , replace('.',',') para substituir ponto por virgula

resultado = nums.map(soma10).map(tirplo).map(paraDinheiro)
console.log(resultado);
