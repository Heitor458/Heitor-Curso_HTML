function novoElemeto(tagName, ClassName){
    const elem = document.createElement(tagName)
    elem.ClassName = ClassName
    return elem
}

function Barreira(reversa = false ){
    this.elemento =  novoElemeto('div','barreira')

    const borda = novoElemeto('div','borda')
    const corpo =novoElemeto('div','corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? corpo :corpo )

    this.setAltura = altura => corpo.style.heigth = `${altura}`
}

//const b = new Barreira(false)
//b.setAltura(300)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)


function PardeBareiras(altura,abertura,x){
    this.elemento = novoElemeto('div','par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura -alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setx = () => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setx()
}

const b = new PardeBareiras(700,200,400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)