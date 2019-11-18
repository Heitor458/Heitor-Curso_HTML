console.log('01','1'== 1);
console.log('02','1'===1);// estritamente Igual ? retorna False pois estamoas nos referindo de '1' string e no segundo um Number
console.log('03','3' !=3); 
console.log('04','3' !== 3 );//Estritamente DIFERENTE Retona TRUE pois , um é do ipo string e outro é do tipo number 


console.log('05',3 < 2);// Retora False
console.log('06', 3 > 2);// Retorna True
console.log('07',3 <= 2);// Retorna False
console.log('08',3 >= 2);// Retorna True

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09',d1 === d2);// Retorna False
console.log('10',d1 == d2);// Retorna False 
console.log('11', d1.getTime() == d2.getTime()); //Retorna como True
console.log('12',undefined == null); //Retorna como True pois não é uma comparação esrimtamente  igual 
console.log('13',undefined === null); // Retorna como False

//Sempre que usar igualdade poucurar sempre utilizar o === estritamente igual 











 

