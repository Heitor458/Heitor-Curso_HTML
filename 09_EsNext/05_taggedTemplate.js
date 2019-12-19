// tagged templates - processsa o template dentro de uma função 
/* A ideia dessa funcionalidade é que você consiga processar uma template string dentro de um Função */
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} esta ${situacao}. `)
