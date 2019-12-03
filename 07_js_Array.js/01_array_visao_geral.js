/* O Array em JS é um Objeto , mas não existe um Array nativo tipos de dados arrays , 
 ao invés de orgarnizar o seus dados através de chaves /Valores 
  ele organixa através de um indice começando de um indice 0.
  Sendo uma estrutura Dinamica */
console.log(typeof Array, typeof new Array, typeof []); // Retorna Function Object Object 

let aprovados = new Array('Bia', 'Carlos', 'Aana')
console.log(aprovados);

aprovado = ['Bia', 'Carlos', 'Aana']
console.log(aprovados[2]);
console.log(aprovados[3]); // Retorna como undefined pois o parametro não foi passado 

// debugger;
/* O debugger é  um breakpoint no js.
no devtools do navegador , ao ler o debugger o navegador irá pausar a interpretação 
do Script na linha determinada.
Para que possa utilizar as ferramentas como Watch( valores de variaveis) 
, CallStack (para saber que função está chamando quem)
etc ..  */

aprovados[3] = ' Paulo '
aprovados['bla'] = 'Rafael '
aprovados.push('Abia')// Adicionando um novo elemento no final do Array 
console.log(aprovados.length)// Retorna 5 pois são ['bia','carlos','Anna '] originais , e ['Paulo'] e ['Abia'] sendo adicionados depois
console.log(aprovados);
console.log(aprovados['bla']);

