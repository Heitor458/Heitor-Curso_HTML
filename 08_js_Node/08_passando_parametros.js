module.exports = function (...nomes) {
    return nomes.map(nome => `Boa Semana ${nome}!`)
}
// essa função irá tranformar uma lista de nomes em uma lista de saudações
// os "..." nos parametros da função  é um argumento variavel wue você podera passar quantos nomes você quiser !!