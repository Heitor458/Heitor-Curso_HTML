const porta = 3003

const express = require('express')
const app = express()
const bancodeDados = require('./bancodeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())
})

app.post('/produtos/:id', (req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.name,
        preoo: req.body.preoo
    })
    res.send(produto) //JSON
})
app.listen(porta,()=>{
    console.log(`Servidor  etsá executando na porta ${porta}.`)
})

