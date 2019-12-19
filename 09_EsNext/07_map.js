const tecnologias = new Map() // Instancia o map através do new
tecnologias.set('react',{frameworks: false })
tecnologias.set('angular',{frameworks: true})

console.log(tecnologias.react); // vai retornar como undefined
console.log(tecnologias.get('react').frameworks); // Forma correta de exibir com a função get 

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123 , 'Númeor'],
])

chavesVariadas.forEach((chave,valor)=>{
    console.log(chave,valor);
})

console.log(chavesVariadas.has(123)); // Has é função  que verifica se o elemento esta ou não dentro desse map 
chavesVariadas.delete(123) // Excluindo elemento dentro desse map
console.log(chavesVariadas.has(123)); // Verificando se o resultado esta dentro desse  map
console.log(chavesVariadas.size); // Verificar quantos elementos estão contidos dentro do map 

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
chavesVariadas.set(456,'b')
console.log(chavesVariadas);
/* Retorna: Map {[Function]=>'função',{} => 'Objeto', 123 => 'b', 456 => 'b'} */

/* Na estrura Map não é possível ter  chaves duplicadas apenas valores igual mostra no exemplo acima  */
