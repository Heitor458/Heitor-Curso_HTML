//  o código abaixo retrata  como funciona o reduce pode debaixo dos panos 
Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21));


// o Link a seguir é um complemento e Resumo da das aulas de rmap,reduce e filter : https://www.youtube.com/watch?v=D_MExaVe95w 