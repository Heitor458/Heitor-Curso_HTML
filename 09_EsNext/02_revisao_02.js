// Const Arow Function 
const soma = (a,b) => {
     return a+b   
}
console.log(soma(3,5));

// Arrow function (this)
/* O This em uma função arrow */
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
/*Quando você tam uma função tradicional o this pode variar de acordo com a chamada da função 
ou pode mudar o contexto através do bind ou de um call ou apply já na função arrow não é possível */

//parametro Default que uma funcionalidade de ter a capacidadede em cima de o atributo de uma função você definir o valor padrão 
function log(texto = 'Node'){
    console.log(texto);
}
log() // Caso colocasse null ele iria retornar como null
log('Sou mais Forte') // Aqui é caso você passar um outro padrão ele irá retornar esse padrão ! 


//Operador rest
function total(... numero){
    let total = 0
    numero.forEach(n => total += n)
    return total
}  
console.log(total(2,3,4,5,6)); // retorna 20 a soma desses quatros números 



