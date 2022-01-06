const getRandomInt = require('./getRandom.js');

process.on('message', (cant) =>{
      const number = [];
        for (let index = 0; index < cant; index++) {
            const random = getRandomInt(1, 1001)
            number.push(random)   
        }
        const result = {}
        number.forEach((number)=>{
            if(result[number]){
                result[number]++
            }else{
                result[number] = 1    
            }
        });
        process.send(result);
        process.exit()


})
process.send('listo')
