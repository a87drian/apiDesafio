const messages = [];

const contenedor = require('../db_contenedor');
const {optionsSqlite} = require('../options')

const messagesContenedor = new contenedor(optionsSqlite, 'messages')

const getMessages = async () => {
    return await messagesContenedor.getAll();
}
const saveMessages = async (message) => {
    return await messagesContenedor.save(message)
}
module.exports = {
    getMessages,
    saveMessages
}