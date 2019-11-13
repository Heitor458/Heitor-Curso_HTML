//Armazenando Função em uma variável 

const imprimieSoma = function(a,b){ 
    console.log(a+b);
}
imprimieSoma(2,3)

//Armazenando uma funcao arrow em uma váriavel
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3));

//Retorno Implicito
const subtracao = (a , b) => a - b //Forma Muito Rreduzida de Uma Function  
console.log(subtracao(2,3));

