const imprimirResunltado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break
        case 8:
        case 7:
            console.log('Aprovado');
            break
        case 6:
        case 5:
        case 4:
            console.log('Recupração');
            break
        case 3:
        case 2:
        case 1:
            console.log('Reprovado');
            break
            default:
                console.log('Nota Invalida');
    }
}
imprimirResunltado(10)
imprimirResunltado(8.9)
imprimirResunltado(4)
imprimirResunltado(2.3)
imprimirResunltado(-1)
imprimirResunltado(11)




// O Switch é feito para múltiplas seleções ,  não é uma expressão  relacional ou seja não retonar verdadeiro ou falso  retorna um valor que pode ser de vários tipos.
/* Em JS por padrão o CASE ele é executado um após o outro , exemplo entrou no CASE 01 é executao vá para o CASE 02, e assim executando os que estão logo abaixo.
Caso queira que finaliza a execução no CASE um sem iniciar o CASE 02 é necessário o Break  */

/* Em JS não é possível fazer intervalos quando se trata de Switch Case*/
/* O  caso default ele pode ficar em qualquer posição porém necessita o break seja em qualquer posição que ele estiver */