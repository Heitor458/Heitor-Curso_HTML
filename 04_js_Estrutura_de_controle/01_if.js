// Exemplo passando uma expressão relacional comparando a nota com um determinado número como exemplo o n 7
function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(7);
soBoaNoticia(6.1);

//  Exemplo passando diretamente o Valor
function seForVerdade(valor){
    if(valor){
        console.log('É Verdade...' + valor);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1,2]);
seForVerdade({})


