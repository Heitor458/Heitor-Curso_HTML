const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1> Parabéns.Usuario Cadastrado com Sucesso !!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    resp.send('<h1> Parabéns. Usuario Alterado  com Sucesso !!</h1>')
})

/* Para Verificar se O servidor Está funcionando */
var porta = 3003
app.listen(porta, () => {
    console.log(`Servidor  etsá executando na porta ${porta}.`)
})