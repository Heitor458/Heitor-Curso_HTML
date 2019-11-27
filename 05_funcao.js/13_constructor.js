// Função construtora 

function carro(velM= 200, delta= 5){
//   Atributo Privado
  let velA = 0 //Dar preferência para o let 
//   Metodo Publico 
  //o This vai ser responsavel tornar algo visivel para fora da fun
  this.acelerar = function(){ 
    if(velA + delta <= velM){
      velA += delta
  }else{
    velA = velM
  }
  }
//  Metodo Publico 
  this.getvelA = function(){
    return velA
  }
}
    
const uno = new carro
uno.acelerar()
console.log(uno.getvelA())

const ferrari = new carro (350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelA())

console.log(typeof carro) // Vai retornar como function
console.log(typeof ferrari) // vai retornar como Objeto 

// A função construtora tem haver com Orientada a Objeto 
