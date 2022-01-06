const express = require('express');
const {fork} = require('child_process');

const randomsRouter = express.Router();
const CANT = 100000000;
const number = [];

randomsRouter.get('/api/help', (req, res)=>{
    res.json({saludo: "hola"})
})

randomsRouter.get('/api/randoms', (req, res) => {
    const {cant = CANT} = req.query;
    const calculo = fork('./utils/calculosNros.js');

    calculo.on('message', msg =>{
        if(msg == 'listo'){
            calculo.send(cant)
        }else{
            res.send(msg)
        }
    })

    // for (let index = 0; index < cant; index++) {
    //     const random = getRandomInt(1, 1001)
    //     number.push(random)   
    // }
    // const result = {}
    // number.forEach((number)=>{
    //     if(result[number]){
    //         result[number]++
    //     }else{
    //         result[number] = 1    
    //     }
    // })
    // res.json(result)
})

module.exports = randomsRouter;