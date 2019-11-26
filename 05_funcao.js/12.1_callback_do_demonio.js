// Ex1: Podemos usar o callback pra qlqr coisa
const obj = {
    ar: [1, 2, 3, 4, 5, 6],
    // chamando-o para cada item
    opEach: function (callback) {
        for (let i in this.ar) {
            // Faz qualquer coisa demorada 
            console.log(`Printando Index:${i}, vale:${this.ar[i]}`);
            callback(this.ar[i])
        }
    },
    // ou chamando-o depois de tudo
    opAfter: function (callback) {
        for (let i in this.ar) {
            // Faz qualquer coisa demorada 
            console.log(`Printando Index:${i}, vale:${this.ar[i]}`);
        }
        callback()
    }
}
// chamando a operacada CADA e passando o bloco de instrucoes q ele deverá executar em cada item e passando em cada item
obj.opEach(function (item) {
    console.log(item);
})
// chamando a operacada DEPOIS e passando o bloco de instrucoes q ele deverá executar no final
obj.opAfter(function () {
    console.log('Fim After');
})



// Ex2: Outro exemplo, faz de conta q irá requisitar um JSON, e devolte ou executa um callback
console.log(' >>>>>>>>> Ex2:');
function obtemJson(url, callback) {
    /// requisitando url magicamente...
    let data = [1, 2] // conteudo MOCK q tem na url
    console.log('executed')

    // se tem callback: executa callcback OU SENAO devolve data
    if (callback !== undefined) {
        callback(data);
    } else {
        return data
    }
}

//  so pega o dada e depois trata (trata = bloco de codigo que interagem com esse DATA)
console.log(' >>>>>>>>> Ex2: SEM callback');
var data = obtemJson('json/blabla.json');
for (const i in data) {
    console.log(data[i])
}

// via callback
console.log(' >>>>>>>>> Ex2: COM callback');
obtemJson('json/blabla.json', function (data) {
    for (const i in data) {
        console.log(data[i])
    }
})


// Ex3: multiplos callback
console.log(' >>>>>>>>> Ex3:');
function obtemJsonTratandoCasos(url, callbackDeuBom, callbackDeuRuim) {
    /// requisitando url magicamente...
    let data = { status: true }; // conteudo MOCK q tem na url

    // pequena inteligencia pra saber se deum bom, e chamando o callback respectivo
    if (data.status === true) {
        callbackDeuBom(data)
    } else {
        callbackDeuRuim(data)
    }
}
obtemJsonTratandoCasos(
    'url.json',
    function (data) {
        console.log('deu bom', data);
    },
    function (data) {
        console.log('deu ruim', data);
    }
)


// Ex4: nomeando muuuiitaaas Callbacks
console.log(' >>>>>>>>> Ex4:');
let promessaFake = {
    deuBom: null,
    deuRuim: null,
    exec: function (url) {
        /// requisitando url magicamente...
        let data = { status: false }; // conteudo MOCK q tem na url

        // pequena inteligencia pra saber se deum bom, e chamando o callback respectivo
        if (data.status === true) {
            this.deuBom && this.deuBom(data) // shortcut para o 'if (this.deuRuim) {..}' 
        } else {
            if (this.deuRuim) {
                this.deuRuim(data)
            }
        }
    }
}
promessaFake.deuBom = function (data) {
    console.log('deu bom', data);
}
promessaFake.deuRuim = function (data) {
    console.log('deu Ruim', data);
}
promessaFake.exec('url.json')



// Ex5: nomeando muuuiitaaas Callbacks e ainda dando a inteligencia como um callback
console.log(' >>>>>>>>> Ex5:');
let promessaFake6 = {
    deuBom: null,
    deuRuim: null,
    inteligencia: null,
    exec: function (url) {
        /// requisitando url magicamente...
        let data = { status: true }; // conteudo MOCK q tem na url

        // pequena inteligencia pra saber se deum bom, e chamando o callback respectivo
        if (this.inteligencia(data)) {
            this.deuBom && this.deuBom(data) // shortcut para o 'if (this.deuRuim) {..}' 
        } else {
            if (this.deuRuim) {
                this.deuRuim(data)
            }
        }
    }
}
promessaFake6.inteligencia = function (data) {
    return data.status === true
}
promessaFake6.deuBom = function (data) {
    console.log('deu bom', data);
}
promessaFake6.deuRuim = function (data) {
    console.log('deu Ruim', data);
}
promessaFake6.exec('url.json')


// Ex6: nomeando muuuiitaaas Callbacks e ainda dando a inteligencia como um callback e COM FLUENT
console.log(' >>>>>>>>> Ex6:');
let promessaFake7 = {
    _deuBom: null,
    setDeuBom: function (callback) {
        this._deuBom = callback
        return this // <-- fluente
    },

    _deuRuim: null,
    setDeuRuim: function (callback) {
        this._deuRuim = callback
        return this // <-- fluente
    },

    _inteligencia: null,
    setInteligencia: function (callback) {
        this._inteligencia = callback
        return this // <-- fluente
    },

    exec: function (url) {
        /// requisitando url magicamente...
        let data = { status: true }; // conteudo MOCK q tem na url

        // pequena inteligencia pra saber se deum bom, e chamando o callback respectivo
        if (this._inteligencia(data)) {
            this._deuBom && this._deuBom(data) // shortcut para o 'if (this.deuRuim) {..}' 
        } else {
            if (this._deuRuim) {
                this._deuRuim(data)
            }
        }
    }
}
promessaFake7
    .setInteligencia(function (data) {
        return data.status === true
    })
    .setDeuBom(function (data) {
        console.log('deu bom:', data);
    })
    .setDeuRuim(function (data) {
        console.log('deu Ruim:', data);
    })
    .exec('url.json');


    
    
// Ex7: callback mais proxima do Promise
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises    
console.log(' >>>>>>>>> Ex7:');
function PromessaFakeMaisReal(worker_with_inteligencia) {
    this._bom = null
    this.then = this.setBom = function (call) {
        this._bom = call
        return this
    }

    this._ruim = null
    this.catch = this.setRuim = function (call) {
        this._ruim = call
        return this
    }

    console.log('trabalhando...');

    // timeout para simular demorar, ou async
    setTimeout(_ => worker_with_inteligencia(this._bom, this._ruim), 3000);
    // worker_with_inteligencia(this._bom, this._ruim)
}

(new PromessaFakeMaisReal((resolve, reject) => {
    console.log('trabalhou!');

    console.log('descidi q deu bom');
    if (true) {
        try {
            resolve('data');
        } catch (error) {
            reject(error)
        }
    } else {
        reject('error')
    }
}))
    .then(function (data) {
        console.log('deu quase bom:', data);
        throw Error('trolei')
    })
    .catch(function (data) {
        console.log('deu ruim:', data);
    })



