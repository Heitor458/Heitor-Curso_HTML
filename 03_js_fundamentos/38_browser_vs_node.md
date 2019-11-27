 ## Browser VS Node.

 `window: O windowobjeto é suportado por todos os navegadores. Representa a janela do navegador.
Todos os objetos, funções e variáveis ​​** globais ** do JavaScript se tornam automaticamente membros do objeto da janela.
Variáveis ​​globais são propriedades do objeto de janela.`
 
 `This. No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não. `

=================================================
Exemplos citados na aula: 
var a = 'Texto '
window.a 
retorna: Texto 
Assim deixando a variavel em um Contexto Global.

let b = 123
window.b 
retorna:undefine 
Assim ainda sendo uma variavel global pois esta declarada no escopo global , porem não vai para o objeto window

this.b 
retona: undefined pois ainda está fora do objeto global 

##### Anotações finais deste tópico:
Quando você declara uma variavel com o nome reservado VAR a variavel vai direto para window,
e quando declara com let ou com const não vai para window, porém ainda fica como uma variavel global.
Assim tendo uma variavel global é ruim , pois  qualquer pessoa pode ter acesso a essas variaveis. Evitar tocar o escopo global com variaveis, (se for com CONST não tem problema pois não tem como sofrer alterações),assim evitando erros no código.
(Essa regra também se aplica para as funções , funções declaradas com let não vão diretamente para o Objeto Window). DICA: uma forma de evitar o escopo global é criando objetos.

Exemplo:
let pessoa = {
    nome:'Ana',
    falar: function(){return `Eu sou ${this.nome
    }
}
onde o this esta referindo a Pessoa

=================================================
Declarando variaveis  e exibindo com module.exports !

lat a = 3
global.b =123
this.c = 456

console.log(a)// Retorna 3
console.log(global.b)

