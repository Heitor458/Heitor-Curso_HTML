const contadorA = require('./05_instanciaUnica')
const contadorB = require('./05_instanciaUnica')

const contadorC = require('./05_instanciaNova')()
const contadorD = require('./05_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor);
