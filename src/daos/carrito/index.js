const config = require('../../options');

let carritoDAO


switch(config.CARRITOS) {
    case 'firestore': 
    const carritosDaoFirestore = require('./firestoreDAO')
    carritoDAO = new carritosDaoFirestore();
    break;
}
module.exports = carritoDAO;