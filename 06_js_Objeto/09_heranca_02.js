// attr = Atributo

// No exemplo abaixo  vemos  como funciona a busca de atributos em cadeia de protoripos 
Object.prototype.attr0 = '0' // NÃOFaça isso em Casa !!! 
const avo = { attr1: 'A' }
const pai = { __proto__: avo, atr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1); // Retorna A pois pega o atributo do protorippo Avo que é 'A'
console.log(filho.attr0);// Retorna como Undifined pois nenhum dos prototipos anteriores apresenta attr0
console.log(filho.attr0, filho.attr1, filho.atr2, filho.attr3);


// Aqui Fiz um exeplo incluindo métodos e atributos e sobrescrita 
const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //Shadowing: Quando tem uma variavel local dentro de uma função  e essa variavel pode sombrear  variaveis de escopo mais abrangentes  
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Aqui estou estabelecendo uma relação entre ferrari e carro ou seja ferari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari); // Retorna  {modelo: 'F40', velMax:324}
console.log(volvo); // Retorna {modelo:'V40', status [function status]}

volvo.aceleraMais(100)
console.log(volvo.status());

ferrari.aceleraMais(300)
console.log(ferrari.status()); //Retorna 300 Km/h pois ele esta referenciando velMax de ferrari que é de 324 sobrescrevendo  velMax 200 de carro 
