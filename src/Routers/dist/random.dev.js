"use strict";

var express = require('express');

var _require = require('child_process'),
    fork = _require.fork;

var randomsRouter = express.Router();
var CANT = 100000000;
var number = [];
randomsRouter.get('/api/help', function (req, res) {
  res.json({
    saludo: "hola"
  });
});
randomsRouter.get('/api/randoms', function (req, res) {
  var _req$query$cant = req.query.cant,
      cant = _req$query$cant === void 0 ? CANT : _req$query$cant;
  var calculo = fork('./utils/calculosNros.js');
  calculo.on('message', function (msg) {
    if (msg == 'listo') {
      calculo.send(cant);
    } else {
      res.send(msg);
    }
  }); // for (let index = 0; index < cant; index++) {
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
});
module.exports = randomsRouter;