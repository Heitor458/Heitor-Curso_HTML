const ferrari = {
    modelo:'F40',
    velMax:324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__); // Retorna como um Objeto Vazio {}
console.log(ferrari.__proto__ ===  Object.prototype); // Retorna como True pois ele representa o prototipo de mais alto nivel 
console.log(volvo.__proto__ === Object.prototype); // Retorna True pois tanto quanto volvo quanto ferrari Ambos apontam para o mesmo object.prototype
console.log(Object.prototype.__proto__); // 

function MeuObject(){}
console.log(typeof Object , typeof MeuObject);
console.log(Object.protorype, MeuObject.prototype);


//__proto__ Forma de acessar o Prototipo de um Objeto 

 console.log(ferrari.prototype) /* se usar dessa forma  vai retornar como undefined,
pois  o Objeto não tem o atributo prototype */
