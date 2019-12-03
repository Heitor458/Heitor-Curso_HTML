class Lancamento {
    constructor(nome = 'Genérico' , valor = 0){
        this.nome = nome
        this.valor = valor 
    }
}


class CicloFinanceiro {
    constructor(mes, ano ){
        this.mes =mes 
        this.ano = ano
        this.Lancamento = [] 
    } 
    addlancamento(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l)) // aqui esou concatenando todos os parametros em um Array e estou percorrendo o array que pertence o Objeto 
        
    }
    sumario(){
        let varlorConsolidado = 0
        this.Lancamento.forEach(l => {
            varlorConsolidado += l.valor // Vai acrescentando ao valor consolidado fazendo uma atribuição aditiva 
        })
        return varlorConsolidado
    }
}

const salario = new Lancamento ('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6,2018)

contas.addlancamento(salario,contaDeLuz)
console.log(contas.sumario());

// Uma forma alternativa de trabalhar com funções construtivas é usando classes !! 