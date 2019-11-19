function rand([min = 0,max=1000]){
    if (min > max)[min,max]=[max,min]
    const valor = Math.random()* (max-min)+min
    return Math.floor(valor)
}

console.log(rand([50,40]));
console.log(rand([992])); //Passando apenas o valor Minimo 
console.log(rand([,10])); // Passando apenas o Valor Máximo e vai assumir o minimo como zero 
console.log(rand([])); // Passando um Array Vazio
console.log(rand()); // Vai passar um erro como undefined pois não da para desestutuar elementos de algo qu eé nulo ou não definido 

// Links para saber mais sobre destructuring:  https://medium.com/@1sherlynn/javascript-es6-array-object-destructuring-23da62822ccd