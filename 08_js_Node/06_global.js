console.log(global);
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})

// O freeze usado aqui para que não haja modificações , pois MinhaApp está em um escopo Global.