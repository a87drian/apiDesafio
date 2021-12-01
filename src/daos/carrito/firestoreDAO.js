const {Schema} = require('mongoose');
const firestoreContainer = require('../../contenedores/fe_contenedor');


class carritoDAO extends firestoreContainer {
    constructor() {
        super()
        }
}


module.exports = carritoDAO;