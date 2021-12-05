const messages = [
        {
            id:0,
            author:{
                id: 'juan@mail.com',
                nombre: 'Juan',
                apellido: 'Ramirez',
                edad: 25,
                alias: 'Juancito',
                avatar: 'url'

            }, 
            text: "¡Hola! ¿Que tal?"
        }, {
            id: 1,
            author:{
                id: 'pedro@mail.com',
                nombre: 'Pedro',
                apellido: 'Escamoso',
                edad: 19,
                alias: 'Pedrito',
                avatar: 'url'

            }, 
            text: "¡Muy bien! ¿Y vos?"
        }, {
            id: 2,
            author:{
                id: 'ana@mail.com',
                nombre: 'Ana',
                apellido: 'Centeno',
                edad: 25,
                alias: 'Anita',
                avatar: 'url'

            }, 
            text: "¡Genial!"
        }


];

const contenedor = require('../contenedores/db_contenedor');
const {optionsSqlite} = require('../options');
const { normalizeMessages } = require('../utils/normalizar');

// const messagesContenedor = new contenedor(optionsSqlite, 'messages')

const getMessages = async () => {
    // const messages = await messagesContenedor.getAll();
    return normalizeMessages({
        id: 'message',
        messages
    })

}
const saveMessages = async (message) => {
    // return await messagesContenedor.save(message)
    messages.push(message);
    // console.log('save messages',messages)
    return message.id
}
module.exports = {
    getMessages,
    saveMessages
}