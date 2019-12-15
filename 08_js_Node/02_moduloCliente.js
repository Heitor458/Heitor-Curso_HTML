// Toda vez que criar uma classe Cliente significa que essa classe irá usar outros módulos que nos vamos definir.

const moduloA = require('./02_moduloA.js')
/* O que eu exportei de modulos armazenei na const moduloA:
Modulos:this.ola = 'Fala Pessoal'
exports.BemVindo = 'Bem Vindo ao Node !'
module.exports.atelogo = 'Até o próximo Exemplo'*/


const moduloB = require('./02_moduloB.js')

console.log(moduloA.ola);
console.log(moduloA.BemVindo);
console.log(moduloA.atelogo);
console.log(moduloA);
console.log(moduloB.boaNoite());
