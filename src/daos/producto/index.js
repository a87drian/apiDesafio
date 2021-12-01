const config = require('../../options');

let productosDAO

console.log('config', config);


switch(config.PRODUCTOS) {
    case 'mongodb': 
    const productosDaoMongo = require('./mongoDAO')
    productosDAO = new productosDaoMongo();
   // console.log('productosDAO', productosDAO)
    break;
}

module.exports = productosDAO;