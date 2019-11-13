//O bloco em si nesse exemplo não fará diferença
//Escopo : é o local onde uma determinada variável é visivel  
{
    {

        {
            {
                var sera = 'Será ?'
                console.log('Dentro =', sera);
            } // Exemplo de variavel Global 
        }
    }
}
console.log('Fora =', sera);


function teste() { // Variavel n global e essa variavel só fica visivel dentro da function 
    var local = 123
    console.log(local);
}
teste()
//Conselho JS Fuja Do escopo Global.

