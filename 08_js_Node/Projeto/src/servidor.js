const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancodeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// index - Lista todos os recursos ! 
app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())
})

// Show - exibe um recurso !
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))
})

// Store - armazena um recurso 
app.post('/produtos', (req, res, next) => {
    console.log(req.body);
    const produto = bancodeDados.salvaProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

// Update - Atualiza os recursos desse produto 
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//Destroy - Remove um recurso 
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.excluirPoduto(req.params.id)
    res.send(produto) //JSON
})

// Esta escutando a Porta 3003 
app.listen(porta, () => {
    console.log(`Servidor  etsá executando na porta ${porta}.`)
})