const pai = {
    nome:'Pedro',
    idade: 34,
    corCabelo:'Castanho'
}

const filha = Object.create(pai) // Assim referencia direto a Classe pai :)
filha.nome = 'Ana ' 
filha.idade = 12
console.log(filha.nome,filha.corCabelo ,filha.idade);

const filha2 = Object.create(pai,{
    nome:{value:'Bia',writable:false,enumerable:true}
})

console.log(filha2.nome);
filha2.nome ='Carla'
console.log(`${filha2.nome} Tem Cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key)? // Aqui é para pegar uma propriedade que realmente pertence ao Objeto no caso 'nome' 
    console.log(key):console.log(`Por Herança: ${key}`); // Aqui são as propriedades herdadas  
}

