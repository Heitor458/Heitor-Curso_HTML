// Com a function declaration podemos ter acesso a essa função  mesmo que na linha acima não qual chamou a função ainda nãp tenha sido declarada essa função ... supondo que ela foi declarada na linha de baixo. Segue o Exemplo Abaixo 

// function declaration
console.log(soma(3,4))

function soma (x,y){
  return x + y}

// Function expression 

const sub = function (x,y){
  return x-y
}

// Named function expression

const mult = function mullt (x,y){
  return x*y 
}