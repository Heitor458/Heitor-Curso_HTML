/* Criamos uma função no prototpe de array chamada for each2 essa
 função recebe um callback e para cada uma das interações do call back passamos três parametro ,
 o valor atual , o indice e o Array completo */
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const aprovados = ['Raul', 'Fernanda', 'Ricardo', 'Guilherme']


aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1})${nome}`);
    console.log(array);
})