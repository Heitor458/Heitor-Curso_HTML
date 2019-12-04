// o código abaixo retrata  como funciona o map pode debaixo dos panos 
Array.prototype.map2 = function (callback) {
    const newAray = []
    for (let i = 0; i < this.length; i++) {
        newAray.push(callback(this[i], i, this))
    }
    return newAray
}

const carrinho = [
    '{"Nome":"Produto","preco": 3.45}',
    '{"Nome":"Produto","preco": 3.45}',
    '{"Nome":"Produto","preco": 3.45}',
    '{"Nome":"Produto","preco": 3.45}'
]

// Retoarnar apenas o Preco 
const paraObjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenaspreco)
console.log(resultado);
