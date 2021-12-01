const {Schema} = require('mongoose');
const mongoContainer = require('../../contenedores/mg_contenedor');


class productDAO extends mongoContainer {
    constructor() {
        super('products', new Schema({
            name: {
                type: String,
                requerid: true
            },
            description: {
                type: String,
                requerid: true
            },
            code: {
                type: String,
                requerid: true
            },
            photo: {
                type: String,
                requerid: true
            },
            price: {
                type: String,
                requerid: true
            },
            stock: {
                type: String,
                requerid: true
            }
        }))
    }
}

module.exports = productDAO;