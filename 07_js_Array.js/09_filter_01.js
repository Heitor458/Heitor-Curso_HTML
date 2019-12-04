/*Filter: usado nos códigos para filtrar um Array 
para ter um Array menor como base no criterio do filter.
Exemplo quando voê quer todos os alunos com notas maiosres que sete.
Com Filter é uma das formas de percorrer um Array.
Temos diversas formas de percorrer um Array:
Usando apenas o forEach: Que ele irá retornar apenas pos elementos.
Usando Map: Transfomar um Array apartir do Array original , assim evitando um forEach.
 Filter: Filtra o Array.
 Considerações Finais: Sempre que precisar um Array em outro utiliza o map 
 e quando precisar filtrar um Array autiliza o Filter  */

const produto = [
    { nome: 'Nootebook', preco: 2499, fragil: true },
    { nome: 'ipad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 2.99, fragil: false },
]

const limitePreco = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produto.filter(fragil).filter(limitePreco))

