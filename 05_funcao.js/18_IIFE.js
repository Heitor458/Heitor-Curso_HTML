/*  Função Auto invocada , Uma função que é declarada mesmo sem nome , 
 e que na hora da declaração , já invoca a execução dessa invocação.
 Motivos para usar uma Função auto Invocada : é utilizda quando você  esta utilizando o Browser
 e quer fugir do espcopo global assim evitando mexer em coisas no escopo global do Browser.*/

// IIFE ---> Imediately Invoked Function Expression 

(function () {
    console.log('Será Executado na Hora!');

    console.log('Foge do escopo mais Abrangente!');
    
})()