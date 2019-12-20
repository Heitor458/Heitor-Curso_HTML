/* A função a seguir faz: 
 Se não for um Valor númerico (isNaN) retorna o proprio numero   ,
 se for um valor numerico  chama valor.toFixed(2) que irá retornar um valor com duas casas decimais*/
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R ${v$alor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
