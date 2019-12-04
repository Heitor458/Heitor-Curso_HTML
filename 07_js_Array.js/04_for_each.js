//  Formas de percorrer um Array
/*For Each*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})