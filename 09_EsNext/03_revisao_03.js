// ES8: Object.values /Objecr.entries 
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj));
console.log(Object.entries(obj)); // Return [['a',1,['b',2],['c',3]]] retornando um array de array 

// Melhorias na Notação litral 
const nome = ' Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi Gente !'
    }
}

console.log(pessoa.nome,pessoa.ola()); // Retorna Carla oi gente ! 

// Class 
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au !'
    }
}

console.log(new Cachorro().falar())

 