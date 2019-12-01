// Criando Objetos de Forma Literal 
const obj1 = {}
console.log(obj1)

// Criando Object em JS aaprtir do Operador New
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Criando Objeto através da Função Construtora
function produto(nome, preco, desc) {
  this.nome = nome // Assim deixando o Atributo Publico
  this.getPecoComDescontor = () => { // Declarando com Arrow Function
    return preco * (1 - desc)
  }
}

const prod1 = new produto('Caneta', 7.99, 0.15)
const prod2 = new produto('NooteBoo', 3.659, 0.25)

console.log(prod1.getPecoComDescontor(), prod2.getPecoComDescontor())

// Criando Objeto através da Função Factory 
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

/* Criando Objeto Através de Object.Create (Não irá se aprofundar nisso nesta aula ) */
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma Função Famosa que Retorna um Objeto ... 
const fromJSON = JSON.parse('{"info:"Sou um JSON"}')
console.log(fromJSON.info)

/* Niveis de Visibilidade de  JS 
Global Quando Trabalha no Nivel do Browser 
Modulo o qual representa o próprio arquivo 
Função 