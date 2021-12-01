const config = require('../../options');

let productosDAO


switch(config.PRODUCTOS) {
    case 'mongodb': 
    const productosDaoMongo = require('./mongoDAO')
    const productosDAO = new productosDaoMongo();
    console.log('productosDAO', productosDAO)
    break;
}
module.export = productosDAO;