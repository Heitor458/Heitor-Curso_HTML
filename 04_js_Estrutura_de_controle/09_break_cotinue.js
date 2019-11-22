/* Break vs continue : o break (é uma linha de código de desvio de fluxo) 
não influência em bloco do tipo ifele influencia no switch dentro de laços for e while. */
//  EVITAR DESVIO DE FLUXO e dar prefeência para outras estruturas.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in num) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${num[x]}.`);
}
for (y in num) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${num[y]}`);

}

//  O Break ele irá fazer com que iterrompa o laço e sair para sentença de código fora do laço que o break está relacionado.

/* O continue só faz sentido ser usado em estruturas de repetição, pois ele imterrompendo a execução atual e pulando para a próxima repetição. 
(ele não age em cima do laço IF).Ele irá  agir no laço mais próximo dele seja ele do topo FOR ou do tipo WHILE
  */

