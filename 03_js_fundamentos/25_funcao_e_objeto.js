console.log(typeof Object); // Isso se trata de uma função 
console.log(typeof new Object); // instanciando uma função  que recebe Object 

const cliente = function () { }// Function
console.log(typeof cliente); // Object
console.log(typeof new cliente); // Object
console.log(typeof new cliente); // Object

class produto { } //  No padrão Ecmascript(que é a mesma coisa de JavaScript) criando classe 
console.log(typeof produto);
console.log(typeof new produto()); // Onject 


/* Em JS Poo a função exerce o papel de uma classe
assim definindo o molde de uma estrutura , suas funções e variaveis...
*/

/*link sobre o assunto:  https://www.devmedia.com.br/poo-trabalhando-com-classes-e-objetos-em-javascript/28434
                        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos
                        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es  */