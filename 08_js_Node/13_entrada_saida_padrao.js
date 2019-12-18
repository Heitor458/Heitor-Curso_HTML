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
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}