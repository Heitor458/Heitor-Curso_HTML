const fs = require('fs')

const produto = {
    nome:'celular',
    preco:124.99,
    desconto:0.15
}

fs.writeFile(__dirname + '/10_arquivoGerado.json',JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo com sucesso !');
    
})