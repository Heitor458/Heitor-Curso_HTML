//O código abaixo retrata  como funciona o filter pode debaixo dos panos

Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    { nome: 'NoteBook', preco: 2445, fragil: true },
    { nome: 'iPad', preco: 2445, fragil: true },
    { nome: 'Copo Vidro', preco: 4199, fragil: true },
    { nome: 'Copo Plastico ', preco: 12.49, fragil: true },
]

const limitePreco = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true
console.log(produto.filter(fragil).filter(caro));
