const a = 1 
const b = 2 
const c = 3
//valorAttr = Valor Atributo 
// Em ambos os casos iiram retornar o mesmo resultado de {a:1 , b:2 , c:3}
const obj1 = {a: a, b: b, c: c}
const obj2 = { a, b, c }
console.log(obj1,obj2);

const nomeAttr = 'nota'
const valorAttr = 7.78

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3); // Retorna nota: 7.78

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4); // Também irá retornat 7.78  outra forma de declarar 

//Como Definir Funções dentro de um Objeto 
const obj5 = {
    funcao:function(){   // Forma Tradicional de Declarar Função 
    //...
    },
    funcao2(){ // Forma Reduzida de Declarar uma Função 
    //...
    } 
}
console.log(obj5);
