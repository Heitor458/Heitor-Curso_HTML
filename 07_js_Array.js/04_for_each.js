//  Formas de percorrer um Array
/*For Each*/
const aprovado = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovado.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);

})
aprovado.forEach(nome => console.log(nome))

// const exibirAprovados = (aprovado  => console.log(aprovado));
const exibirAprovados = (aprovado, indice => console.log(aprovado, indice));
aprovado.forEach(exibirAprovados)
