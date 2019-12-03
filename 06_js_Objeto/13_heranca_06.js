function Aula (nome,videoID){
    this.nome = nome
    this.videoID =videoID
}

// Quando utiliza o operador new cria um novo objeto feito e o prototipo desse objeto aponta para a função no caso a função aula
const aula1 = new Aula('Bem Vindo',123)  // Retorna : Aula {nome:'Bem vindo', videoID 123}
const aula2 = new Aula ('Até Logo',456) // Retorna: Aula{ nome 'Até breve', videoID: 456}
console.log(aula1,aula2);

// Simulador do operador new

function novo (f,...params) {
    const obj  = {} // Cria um objeto novo 
    obj.__proto__ = f.prototype // Associou o prototipo desse objeto ao protorype da função é o que acontece chamado quando chama o nwe
    f.apply(obj,params) // chamou f.apply passando como contexto o obj que seria o 'this.' o obj da linha 12
    return obj  // retorna o objeto criado que o operador new retorna um objeto criado 
}

const aula3 = novo(Aula,'Bem Vindo ',123) // Retorna : Aula {nome:'Bem vindo', videoID 123}
const aula4 = novo(Aula,'Até Breve',456)  // Retorna: Aula{ nome 'Até breve', videoID: 456}
console.log(aula3,aula4);
