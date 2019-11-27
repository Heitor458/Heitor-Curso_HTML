 //  conceito de Closure: O Closure é o escopo criado quando uma função é daclarada. E esse escopo permite a função acessar e manipular variáveis externas à Função. 

// Contexto Léxigo em Ação !

const x = 'Global'

function fora(){
  const x = 'Local'
  function dentro(){
    return x
  }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())

/* Vai retornar como Local porque : 
porque o local físico na qual a função foi declarada
 tinha uma variavel x com o valor local
 vai retonar a variavel x com o valor local.
*/
