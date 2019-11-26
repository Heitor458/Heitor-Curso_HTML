function pessoa(){
    this.idade = 0

    // o setInterval dispara uma outra função em um intervalo determinado
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade);
        
    }/*.bind(this)*/, 1000)  
}
new pessoa

// Neste exemplo utilizamos o const self = this para cravar o valor de this que varia  nesse contexto 