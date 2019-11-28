// Usando Class 
class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {

        console.log(`Meu Nome é ${this.nome}`);
    }
}
const p1 = new pessoa('Joao')
// p1.falar()

// Usando Função Factory  como Arrow Function 
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu Nome é ${nome}`)
    }
}
const p2 = criarPessoa('Heitor')
// p2.falar()


// Desafio da aula Transformando Class em Constructor

function PessoaD(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu Nome é ${this.nome}`)

    }
}
const pe1 = new PessoaD('Fulano')
// pe1.falar()

// Forma Literal de declarar um Objeto ! 
//  Objeto literal é um Object que NAO é a instancia de uma Class.

let nome = 'Blala'
const pessoaLiteral = {
    nome: 'FulanoA',
    falar: function () {
        let nome = 'BBB'
        console.log(`Meu Nome Literal é  ${nome}`) // Retorna BBB
        console.log(`Meu Nome Literal é  ${this.nome}`) //Retorna FulanoA, porque:  this  = pessoaLiteral  nesse escopo
    }
}
// pessoaLiteral.falar()




const pessoaLiteral2 = {
    nome: 'DEMONIO BIND',
    subObjeto: {
        falar: function () {
            let nome = 'BBB'
            console.log(`Meu Nome Literal é  ${nome}`) // Retorna BBB
            console.log(`Meu Nome Literal é  ${this.nome}`) // o This aqui dentro se refere ao subObjeto
        }
    }
}
// pessoaLiteral2.subObjeto.falar() // da Ruim pq no escopo não possui o nome como propriedade.

// Para arrumar faça um Bind para acessar  o nome como propriedade.
const falarComNome = pessoaLiteral2.subObjeto.falar.bind(pessoaLiteral2)
falarComNome()




// Agora tentando acessar o nome como primo. usando o bind para encontra-lo 
const pessoaLiteral3 = {
    outroObj: {
        nome: 'DEMONIO BIND',
    },
    subObjeto: {
        falar: function () {
            let nome = 'BBB'
            console.log(`Meu Nome Literal é  ${nome}`) // Retorna BBB
            console.log(`Meu Nome Literal é  ${this.nome}`) // o This aqui dentro se refere ao subObjeto
        }
    }
}
const falarComNome2 = pessoaLiteral3.subObjeto.falar.bind(pessoaLiteral3.outroObj)// utiliza a mesma lógica de pasta e subpastas 
falarComNome2()

