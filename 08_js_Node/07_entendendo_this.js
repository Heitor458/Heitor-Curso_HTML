// Entendendo o This 
console.log(this === global); //return false pois this  não aponta para global e sim para module.exports
console.log(this === module ); // return false pois this é um objeto referente de module.exports 
console.log(this === module.exports); //  return True 
console.log(this === exports ); // return True 

// This fora de uma função aponta para module.exports , ou seja está transformando aquele atributo ou função em algo publico algo que estara visivel fora do Modulo
function logThis(){
    console.log('Dentro de uma Função');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global ); // return true o This dentro de uma função aponta para uma global 

    this.perigo = '...'
}

logThis()
