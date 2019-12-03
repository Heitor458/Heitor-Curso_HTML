console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);


String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function (){
    return this[0] //Pegando o primeiro elemento do Array 
}
console.log([1,2,3,4,5].first());
console.log(['a','b','c','d'].first());

String.prototype.toString = function (){ // Sobrescrevendo o comportamento na Função toString
 return 'lascou Tudo'
}

console.log('Escola Cod3r'.reverse());

