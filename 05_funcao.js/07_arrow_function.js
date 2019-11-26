// Declarando Função de modo Normal
let dobro = function(a) {
    return 2 * a
}

// resscrevendo o dobro com a função arrow 
dobro  = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI));

let ola = function (){
    return ' Olá'
}
 ola = () => 'Olá' // colocando parametros em parenteses 
 ola = _ => 'Olá' // Passando parametros com 
 console.log(ola());
 
