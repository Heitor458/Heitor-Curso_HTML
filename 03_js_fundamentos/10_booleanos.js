let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto'); // Com espaço Vazio.
console.log(!![]); // Com Array Vazio.
console.log(!!{}); // Com  Um Objeto Literal Vazio.
console.log(!!Infinity); // ipo infinito 
console.log(!!(isAtivo = true));

console.log('Os Falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);// Not a number
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para Finalizar');
console.log(!!(''|| null || 0 || ' ')); //Retorna vedadeiro , pois entre esses ous ha uma condição que é verdadeiro no caso o ' ' <- esoaço em branco.

let nome = 'Lucas'
console.log(nome|| 'Desconhecido'); // Nesse exemplo caso não passar o nome para a Variavel nome retorna o valos 'Desconhecido'.























