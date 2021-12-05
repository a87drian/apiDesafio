"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var express = require('express');

var productosRouter = require('./Routers/productos');

var carritoRouter = require('./Routers/carritos');

var _require = require('http'),
    HttpServer = _require.Server;

var _require2 = require('socket.io'),
    IOServer = _require2.Server;

var _require3 = require('./models/messages'),
    getMessages = _require3.getMessages,
    saveMessages = _require3.saveMessages;

var faker = require('faker');

var server = express();
var httpServer = new HttpServer(server);
var io = new IOServer(httpServer);
server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({
  extended: true
})); // server.use('/static', express.static('public'))

server.use(express["static"]('public'));
server.get('/', function (req, res) {
  res.send({
    message: new Date().toLocaleDateString()
  });
});
var PORT = process.env.PORT || 8082;
server.use('/api/productos', productosRouter);
server.use('/api/carrito', carritoRouter);
server.get('/test', function (req, res) {
  var products = _toConsumableArray(new Array(5)).map(function (_, i) {
    var _ref;

    return _ref = {
      id: i,
      title: faker.commerce.product()
    }, _defineProperty(_ref, "title", faker.commerce.price()), _defineProperty(_ref, "thumbnail", faker.image.imageUrl()), _ref;
  });

  res.json(products);
}); // server.listen(PORT, ()=> {
//     console.log(`server on ${PORT}`)
// })
// server.listen(PORT, ()=> {
//     console.log(`server on ${PORT}`)
// })

httpServer.listen(PORT, function () {
  console.log("Servidor corriendo en http://localhost:".concat(PORT));
}); // const messages = [
//     {
//         author: "Juan",
//         text: "¡Hola! ¿Que tal?"
//     }, {
//         author: "Pedro",
//         text: "¡Muy bien! ¿Y vos?"
//     }, {
//         author: "Ana",
//         text: "¡Genial!"
//     }
// ]

io.on('connection', function _callee2(socket) {
  var messages;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getMessages());

        case 2:
          messages = _context2.sent;
          console.log('get messages', messages);
          socket.emit('messages:', messages);
          socket.on('new-message', function _callee(message) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(saveMessages(message));

                  case 2:
                    //  console.log('socket on',messages)
                    io.sockets.emit('messages', messages);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});