const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice+1}.${nome}`);
}
fabricantes.forEach(imprimir)

// O callback é uma função que essa função sera chamada quando um evento acontecer , nesse caso é um loop que é cada um dos elementos precorridos no Array 
