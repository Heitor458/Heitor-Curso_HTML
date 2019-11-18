/* Todos os Operandos tem que ser Verdadeiro para que o resultado seja Verdadeiro basta um ser falso para o resultado seja falso
   v e v -> v
   v e f -> f 
   f e ? -> f 

   v ou ? -> v
   f ou v -> v
   f ou f -> f 

   Ou Exclusivo  obrigatoriamente od dois tem que ser diferente para que o resultado seja Verdadeiro 
   v xor v -> f
   v xor f -> v 
   f xor v -> f 
   
   Negação Lógica 
   !v -> f  // operadores unários são: Aqueles usados em expressões com apenas 1 operando
   !f -> v 
   */
function compras(trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(tabalho1^trabalho2)//bitwase xor opera bit a bit 
    const comprarTv32 = trabalho1 != trabalho2 // O ou exclusivo pode ser simulado com a diferença: pois verdadeiro é  diferente de falso é um ou exclusivo falso é diferente de verdadeiro é um ou exclusivo 
    const mantersaudavel = !comprarsorvete // Operador unário 
    
    return { comprarsorvete, comprarTv32, comprarTv50, mantersaudavel } //Criando um Objeto  chave valor (só que implicito )para retonar os valores das const.
}

console.log(true, true);
console.log(compras(true, false));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));



