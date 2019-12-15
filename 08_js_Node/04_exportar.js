console.log(module.exports); // Retorna uma Objeto vazio que pode ser exportado atraves do this 

console.log(module.exports === this);
console.log(module.exports === exports );

this.a = 1
exports.b = 2
module.exports.c = 3
exports = null 
console.log(module.exports);

exports = {
    nome:'Teste '
} //não ira retornar isso 
console.log(module.exports); // Irá retornar {a:1 , b:2, c:3}

module.exports ={publico: true } //Sempre que precisar atribuir um novo objeto a para ser exportado use module.exports
 console.log(module.exports);
  // Considerações Fianais o this e o exports são apenas duas referências que module.exports apontam 