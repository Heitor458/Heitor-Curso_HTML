const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //importando o axios

//Resolvendo Desafio !
const chineses = f => f.paises === 'Chine'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return fun.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func);
})