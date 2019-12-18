const schedule = requeire('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5*15**2',function(){
    console.log('Executnando tarefa 1!', new Date().getSeconds());
    
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!');
    
},2000)

// Outras possibilidades de temporrizadores 

//setImmediate :
//setInterval : Disparar uma função de tempos em tempos 

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 13
regra.second = 30 

const trefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa2!', new Date().getSeconds())

})