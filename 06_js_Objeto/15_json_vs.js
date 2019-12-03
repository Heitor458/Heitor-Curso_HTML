//  JSON : JavaScript Object Notation
const obj = { a : 1, b : 2, c :  3 , soma(){return a + b + c}}
console.log(JSON.stringify(obj)); //Passando Um Objeto para JSON 
/* A função soma foi excluida do JSON pois JSOn é um formato de dados , ou seja não é algo que é executado 
são dados que estão trafegando  de uma aplicação para outra , ou que estão armazenados em um apicativo */

// Passando um JSON para Objeto 
 // console.log(JSON.parse("{a : 1, b : 2, c :  3 }")); // Não é um formato JSOn Válido 
 //console.log(JSON.parse("{'a' : 1, 'b' : 2 , 'c' :  3}")); // Não é um Formato válido pois todos os atributos devem ser delimitados por aspas duplas 
console.log(JSON.parse('{ "a" : 1, "b ": 2, "c ":  3}')); // ASSIM FUNCIONA !!! lembre-se de colcoar aspas simples antes das chaves 
console.log(JSON.parse('{"a":1.7,"b":"string","c": true,"d":{},"e":[]}')); // TODOS FORMATOS SUPORTADOS POR JSON sendo que todas as strings sejam delimitadas pos aspas duplas 
 

// Link para Verificar se um JSON é Valido : https://jsonlint.com/
 
