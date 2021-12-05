"use strict";

var messages = [{
  id: 0,
  author: {
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
  author: {
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
  author: {
    id: 'ana@mail.com',
    nombre: 'Ana',
    apellido: 'Centeno',
    edad: 25,
    alias: 'Anita',
    avatar: 'url'
  },
  text: "¡Genial!"
}];

var contenedor = require('../contenedores/db_contenedor');

var _require = require('../options'),
    optionsSqlite = _require.optionsSqlite;

var _require2 = require('../utils/normalizar'),
    normalizeMessages = _require2.normalizeMessages; // const messagesContenedor = new contenedor(optionsSqlite, 'messages')


var getMessages = function getMessages() {
  return regeneratorRuntime.async(function getMessages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", normalizeMessages({
            id: 'message',
            messages: messages
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var saveMessages = function saveMessages(message) {
  return regeneratorRuntime.async(function saveMessages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // return await messagesContenedor.save(message)
          messages.push(message); // console.log('save messages',messages)

          return _context2.abrupt("return", message.id);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  getMessages: getMessages,
  saveMessages: saveMessages
};