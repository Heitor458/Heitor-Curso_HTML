function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//  const b =  new Barreira(true)
//  b.setAltura(300)
//  document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// Iniciando Teste para ver se a função construtora Funciona 
// const b = new ParDeBarreiras(700,200,800)// Sendo na seguinte ordem Altura,Abertura e o x
// document.querySelector('[wm-flappy]').appendChild(b.elemento) //esse "b" é objeto criado apartir da função construtora 

//Essa funçãoo será responsavel por controlar multiplas barreiras 
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 // altera a velocidade de deslocamento das barreiras ! 
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}


function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'img/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        // Essa Chcagem para que o passaro não saia da área do jogo 
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'Progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}
    function colidiu(passaro, barreiras){
        let colidiu = false 
        barreiras.pares.forEach(ParDeBarreiras =>{
            if(!colidiu){
                const superior = ParDeBarreiras.superior.elemento
                const inferior = ParDeBarreiras.inferior.elemento
                colidiu =   estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
            }
        })
        return colidiu
    }    

function flappyBrid() {
    let pontos = 0

    const areaDojogo = document.querySelector('[wm-flappy]')
    const altura = areaDojogo.clientHeight
    const largura = areaDojogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))

    const passaro = new Passaro(altura)

    areaDojogo.appendChild(progresso.elemento)
    areaDojogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDojogo.appendChild(par.elemento))

    this.start = () => {
        //Loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro,barreiras)){
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new flappyBrid().start()

// Código referentes a teste !!
// const barreiras = new Barreiras(700,1200,200,400)
// const passaro = new Passaro(700)
// const areaDojogo = document.querySelector('[wm-flappy]')
// areaDojogo.appendChild(passaro.elemento)
// areaDojogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDojogo.appendChild(par.elemento))
// setInterval(() => {
//         barreiras.animar()
//         passaro.animar()
// }, 20);