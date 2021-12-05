"use strict";

var config = require('../../options');

var productosDAO; //console.log('config', config);

switch (config.PRODUCTOS) {
  case 'mongodb':
    var productosDaoMongo = require('./mongoDAO');

    productosDAO = new productosDaoMongo(); // console.log('productosDAO', productosDAO)

    break;
}

module.exports = productosDAO;