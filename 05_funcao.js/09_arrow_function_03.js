let comparacomThis = function (param) {
    console.log(this === param)
}

comparacomThis(global)

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global) // o retorno no console vai ficar como false pois ele não esta mais no escopo Global 
comparacomThis(obj) // O return vai passar como True por conta do Bind 

let comparacomThisArrow =  param => console.log(this === param);
// Se eu fizer com uma função errow ela não aponta para o Global 
comparacomThisArrow(global)

// Link para complemento da Aula: https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/#:~:targetText=Statements%20(as%20opposed%20to%20expressions,need%20to%20have%20curly%20braces.

