function MeuObjeto(){}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__===obj2.__proto__); // True 
console.log(obj2.__proto__ === obj2.__proto__); // True 

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia Meu nome é ${this.nome} !`)
}

obj1.falar()
obj2.nome = 'Rafaela'
obj2.falar()
const obj3 = { a: 2}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//RESUMO (APENAS POR CONHECIMENTO DIDATICO ! ) 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // Quando um Objeto é instanciado através da função são iguais 
console.log(MeuObjeto.__proto__ === Function.prototype); // Retorna como true 
console.log(Function.prototype.__proto__ === Object.prototype); // Retorna True 
console.log(Object.prototype.__proto__ === null); // Retorna Como True 


