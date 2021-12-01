const config = require('../../options');

let carritoDAO


switch(config.CARRITOS) {
    case 'firestore': 
    const carritosDaoFirestore = require('./firestoreDAO')
    const productoDao = new carritosDaoFirestore();
    break;
}
module.export = carritoDAO;