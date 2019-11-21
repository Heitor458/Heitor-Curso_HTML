function teste1(num) {
    if (num > 7)
        console.log(num);
    console.log('final')
}
// teste1(6)
// teste1(8)

function teste2(num) {
    if (num > 7){
        console.log(num);
    }
}

teste2(6)
teste2(10)   


// Um exemplo de código errado pois há o uso de ';' apos a sentença IF 
function teste2(num) {
    if (num > 7);{
        console.log(num);
    }
}

/* O console vai me retornar os dois números,
pois a sentença de código ';' após o if faz com que seja uma 
sentença nula  assim fazendo com que as sentenças a seguiir não façam parte do IF ,
ou seja não coloca ';' NÃO USAR com as estruturas de controle*/