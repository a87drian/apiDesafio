"use strict";

var getRandomInt = require('./getRandom.js');

process.on('message', function (cant) {
  var number = [];

  for (var index = 0; index < cant; index++) {
    var random = getRandomInt(1, 1001);
    number.push(random);
  }

  var result = {};
  number.forEach(function (number) {
    if (result[number]) {
      result[number]++;
    } else {
      result[number] = 1;
    }
  });
  process.send(result);
  process.exit();
});
process.send('listo');