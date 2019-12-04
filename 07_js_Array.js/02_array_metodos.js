const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // Retira o ultimo elemento do Array no casso o Piloto massa 
console.log(pilotos);
pilotos.push('Verstappen ') // Adiciona Elementos no Array 
console.log(pilotos);

 pilotos.shift() // Retira o Elemento da primeira posição  
 console.log(pilotos);
 
 pilotos.unshift('Heitor') // Adiciona um Elemento na Primeira Posição 
 console.log(pilotos);

 //Splice pode adicionar e remover elementos 

 //Adicionar 
 pilotos.splice(2, 0, 'Bottas','Massa') // Adiciona no indice 2 'Bottas','Massa' e  não remove niguém 
 console.log(pilotos);

 // remover
 pilotos.splice(3,1) // Remover apenas '1' elemento do indice '3' do Array 
 console.log();
 
 const algunsPilotos1 = pilotos.slice(2) // Cria um novo Array , apartir do indidice 2 do primeiro array  cortando o arrayy
 console.log(algunsPilotos1);
 
 const algunsPilotos2 = pilotos.slice(2,4) // caria um novo arraay, apartie do indice dois ao quatro sem incluir o elemento do indice quatro do primeiro elemento 
 console.log(algunsPilotos2); // Retoro esperado ['Botatas','Raikkonen']
 