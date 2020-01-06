const http = require('http') // mesma coisa que o require 

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recursp do ES8
// Objetivo de Simploficar o uso de promises...
// Ao ivés de chamar a função getTurma com o then simplesmente atribui a constante  getTurma com o await 

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C') 
    return [].concat(turmaA, turmaB, turmaC)
} // Mesmo tendo um array como retorno ele irá retornar um Objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))