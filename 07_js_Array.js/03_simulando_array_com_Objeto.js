// Fazendo um "Array com Objeto"
const quaseAray = {0: 'Rafael', 1 :'Ana', 2:'Bia'}
console.log(quaseAray)
Object.defineProperty(quaseAray,'toString',{
    value : function (){
        return Object.value(this)},
        enumerable: false
})
console.log(quaseAray[0]);
// um Array de verdade 
const  meuArray = ['Rfael','Ana','Bia']
console.log(quaseAray.toString(),meuArray);

