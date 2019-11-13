// Par nome/valor
const saudacao = 'Opa' // contexto léxico : é o contexto o local no qual a variavel foi definida no código 

function exec(){
    const saudacao = ' Falaa' // contexto léxico2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'pedro',
    idade:32,
    peso:90,
    endereco:{
            logradouro: 'Rua tal',
            numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

// Link para Saber mais sobre o assunto de contexto léxico: https://maxroecker.github.io/blog/javascript-intermediario-1/index.html 


