console.log(Math.ceil(6.1)); // Arredondar para cima 

const obj1 = {}
obj1.nome = 'Bola' // o uso do ponto serve para criar ou acessar um atributo 
obj1['nome'] = 'Bola2' // Outra forma de declarar um atributo 
obj1.tamanho = 'Grande'
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome // usando o this.nome = nome deixa o nome Publico para quem instanciar o objeto Obj.
    this.exec = function () {
        console.log('Exec...');

    }
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome);
console.log(obj3.nome);
//notção ponto é uma forma que tenho acesso os  mmenbros de um Ojeto  ou de uma função apartir de notação ponto.