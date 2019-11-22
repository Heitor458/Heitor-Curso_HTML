// Exemplo usando FOR fazendo um Contador 
let contador = 1
while(contador <= 10){
    contador++
    console.log(`Contador =  ${contador}.`);
}
console.log("Fim Contador");

for( let i = 1;i <=10;i++){
    console.log(`i = ${contador}.`);
}
console.log("Fim contador");

// Exemplo de for utilizando Array
const notas = [6.7,7.4,9.8,8.1,7.7]
for(let  i = 0 ; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`);
}

const nota = [6.7,7.4,9.8,8.1,7.7]
for(i  in nota){
    console.log(i,nota[i]); 
}

// Exemplo de for com Objeto Pessoa 
const pessoa ={
    nome:'Fulano',
    sobrenome:'De tal',
    idade:25,
    peso: 64
}

for( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
