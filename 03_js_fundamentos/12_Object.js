const prod1 = {}
prod1.nome = 'Samsung J7 Prime'
prod1.preco = '1.095'
prod1['Desconto Show'] = 0.40 //Evitar Atributos com Espaço

console.log(prod1);

const prod2 = { // Outra forma de Criar Múltiplos Objetos
    nome: 'Iphone',
    preco: 'Um Rim',
    prod3: {
        nome: 'Xiaomi',
        preco: '1.500',
        prod4: {
            nome: 'Outro celular',
            preco: '10.1000'
        }
    }
}
console.log(prod2);

/*Anotações finais JSON = 'javaScript Object Notation'
 é Diferente de Objeto , json = é um  formato textual 
 e objeto são atributos e contexto  no próprio código*/
