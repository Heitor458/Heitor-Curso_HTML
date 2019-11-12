let valor // não inicializa
console.log(valor); // Retorna Undefined

valor = null  // Ausência de valor e que não aponta para nenhum Local na memória 
console.log(valor); 
// console.log(valor.toString())// Vai dar Ero !!

const produto = {}
console.log(produto.preco)
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco);
// delete produto.preco // Essa é a forma correta de tirar o atributo de um Objeto e não o undefined 
console.log(produto);

produto.preco = null // sem preco 
console.log(!! produto.preco);
console.log(produto);
