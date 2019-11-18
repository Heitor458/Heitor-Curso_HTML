function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//parametros Diferentes para chamar a mesma Função !
const obj = {max:50,min:40}
console.log(rand(obj));
console.log(rand({min:995})); //Passando apenas o Valor de Minimo 
console.log(rand({})); // Passando um Objeto Vazio !  ficar gerando números  aleatorios entre zero e mill 
console.log(rand()); // Vai dar erro pois ele vai tentar desestruturando algo que está undefined  





