// let e const 
{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a);
/* Nesse caso  para acessar a variável B é necessário que ela esteja dentro do escopo
 pois ela foi definida apartir da palavra reservada let, diferente da varivel a 
 que foi definida apartir da palavra reservada var não tem escopo de bloco */

// Template String 
const produto = 'ipad'
console.log(`${produto} é Caro !`);

// Desctructuring é a maneira de você tirar de dentro de uma estrutura um objeto um array ou uma string 

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, y] = [1, 2, 3]
console.log(x, y)

const { i, idade, nome } = { nome: 'Ana', idade: 9 }
console.log(`Ola meu nome é ${nome}, eu tenho ${idade} anos de idade`);
