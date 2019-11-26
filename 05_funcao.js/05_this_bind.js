// 
const pessoa ={
    saudacao:'Ola',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //Para resolver o conflito entre Paradigma com Bind
falarDePessoa();

//  A ideia do Bind utilizado para resolver o problema do this em chamadas multiplas 