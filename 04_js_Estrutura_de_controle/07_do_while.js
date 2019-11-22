// Exemplo de Do/while é a unica expressão que está após o bloco 
function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {

    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção Escolhida foi ${opcao}.`);
} while (opcao != 1)

console.log('Fim');

/* DO/WHILE: uma variante do while , garantindo que haja pelo menos uma vez uma repetição*/  