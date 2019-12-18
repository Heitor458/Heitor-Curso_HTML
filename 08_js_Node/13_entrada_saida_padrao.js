const endOfLine = require('os').EOL;

// No inicio da aula escreva no terminal  node 13_entrada_saida_padrao.js -a 

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo); // Retorna False

// Se for anonimo Faça imprimir no console com stdout (standard outputt = saida padrão ) escreva ('Fala Anonimo')
if (anonimo) {
    process.stdout.write('fala Anônimo!\n ')
    process.exit()
} else {
    process.stdout.write('Informe seu Nome:')
    // O Evento on data é desparado quando o usuario pressiona Enter
    process.stdin.on('data', data => {
        const nome = data.toString().replace(endOfLine, '') // o endOfline uma constante para caractere de nova linha esoecifico da plataforma é semelhante ao \r\n
        process.stdout.write(`Fala  ${nome} !!`)
        process.exit()
    })
}