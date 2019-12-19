/* For of : Enquanto o for in intera em cima de indice 
o for of ele intera em cima de valores , 
podendo interar  em cima de map , set ,Array, String e Objeto */

for (let letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

for (let valor of assuntosMap.values()) {
    console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log([ch, vl]);
}

const s = new Set( ['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);

}
