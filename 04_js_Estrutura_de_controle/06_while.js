/* A estrrutura While é apropriado utilizar quando se tem uma estrutura de repetição indeterminada 
onde chega determinada situação quando você não sabe quantos elementos será necessário interar */
function getInteiroAleatorioEntre(min,max){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao=getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi: ${opcao}.`);   
}
console.log('Até a próxima!');

