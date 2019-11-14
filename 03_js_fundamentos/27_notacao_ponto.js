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

// outro exemplo 

var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'Masculino',
    interesse: ['Música', 'Esquiar'],
    bio: function () {
        return this.nome[0] + ' ' + this.nome['1'] +
            ' tem ' + this.idade + ' Anos de idade.' +
            ' Ele Gosta de ' + this.interesse[0] + ' e ' + this.interesse[1] + '.'
    },
    saudacao: function () {
        return 'Oi! Eu sou ' + this.nome[0] + '.'
    }
}
console.log(pessoa.nome);
console.log(pessoa.nome[0]);
console.log(pessoa.idade);
console.log(pessoa.bio());
console.log(pessoa.saudacao());




