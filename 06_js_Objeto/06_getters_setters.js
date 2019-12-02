// Metodos que alteram e le atribbutos de forma controlado 
 // Assi send o métodos GET para ler o valo de uma variavel  e o SET para alterar o Valor de uma Variavel.


 //Convenção  assim mostrando para outros desenvolvedores que é uma váriavel privada 
const sequencia ={ 
    _valor:1,
    get valor() {return this._valor++},
    set valor(valor){
        if( valor > this._valor){
            this._valor = valor
        }
    }
 }
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 10000
console.log(sequencia.valor,sequencia.valor);

/* Aqui irá Retornar 10002 10003 pois irá ignorar o 'sequencia.valor = 900', 
pois o valor é menor do que ela já tem então irá ignorar o set anterior */
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor); 


