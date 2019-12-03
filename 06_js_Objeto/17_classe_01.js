class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
/* O extends é a forma de determina que uma classe tenha outra classe como protoripo
  ou que uma determinada função tenha como prototipo uma outra função.
  Por debaixo dos panos a herança continua via prototipo */
class pai extends avo  {
    constructor(sobrenome, profissao = 'Professor'){
            super(sobrenome)
            this.profissao = profissao
    }
}

class Filho extends pai {
    constructor(){
        super('Mota')
    }
}
const filho = new Filho
console.log(filho);
