// Criando situação de erro para tratar 
function tratarErroElancar(erro) {
    // throw new Error('Ocorreu um erro ...')
    // Formas de retratar o throw:
    // throw 0
    // throw true
    // throw 'Mensagem'
    throw{    //Lanca o erro 
        nome:erro.name,
        msg:erro.message,
        dare:new Date
    }
}
function imprimirNomeGritado(obj) {
    try {  
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch (e) {
        tratarErroElancar()
    } finally {
        console.log('Final');
    }
}
const obj = { nome: 'FULANO' } // Vai retornar um erro que foi declarado no throw da função tratarErrorElancar 
imprimirNomeGritado(obj)

// Anotações da Aula:
/*No try você coloca códigos ptencialmente perigosos ,
 quando acontecer erro caia no catch e
  por fim mesmo que não aconteça erro no try ele caia no finally.
  E a forma que tem de lançar o erro em JS você utiliza o Throw */

  /* Link referente a aula: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw */
