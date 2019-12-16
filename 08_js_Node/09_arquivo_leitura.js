const fs = require('fs')

const caminho = __dirname + '/09_arquivo.json'

// como Ler um arquivo de uma forma Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')// Utilizei o utf-8 pois o arquivo json foi escrito em utf-8
console.log(conteudo);

//Como fazer uma forma de leitura Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`); // Retorno esperado localhost:5432
})

// Usando o Proprio loader do node (Padrão)
const config = require('./09_arquivo.json')
console.log(config.db);  // Retorno esperado {host:'localhost', port:5432m user:'usuario', pass:'123456'} 

//Lendo Pastas 
fs.readdir(__dirname, (err,arquivos) => {
    console.log('Conteúdo da Pasta...')
    console.log(arquivos)
})