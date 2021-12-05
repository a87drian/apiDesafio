"use strict";

var express = require("express");

var carritoRouter = express.Router(); //const containerCarrito = new container("./Products/carrito.json");

var containerCarrito = require('../daos/carrito/index');

var Admin = true; //console.log('containerCarrito', containerCarrito)

carritoRouter.get("/:id/productos", function _callee(req, res) {
  var _idCarrito, Carrito;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!Admin) {
            _context.next = 8;
            break;
          }

          _idCarrito = req.params.id;
          _context.next = 4;
          return regeneratorRuntime.awrap(containerCarrito.getById(_idCarrito));

        case 4:
          Carrito = _context.sent;

          if (Carrito === undefined) {
            res.json({
              message: "id no encontrado"
            });
          } else {
            res.json(Carrito.productos);
          }

          _context.next = 9;
          break;

        case 8:
          res.json("{error : -1, descripcion: ruta ".concat(req.url, " m\xE9todo ").concat(req.method, " no autorizada}"));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
carritoRouter.post("/:id/productos", function _callee2(req, res) {
  var _idCarrito2, carrito, producto, carritoUpdate;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!Admin) {
            _context2.next = 14;
            break;
          }

          _idCarrito2 = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(containerCarrito.getById(_idCarrito2));

        case 4:
          carrito = _context2.sent;

          if (carrito === undefined) {
            res.json({
              message: "id no encontrado"
            });
          }

          producto = req.body;
          console.log("producto: ", req.body);
          _context2.next = 10;
          return regeneratorRuntime.awrap(containerCarrito.update(_idCarrito2, producto));

        case 10:
          carritoUpdate = _context2.sent;
          res.json(carritoUpdate);
          _context2.next = 15;
          break;

        case 14:
          res.json("{error : -1, descripcion: ruta ".concat(req.url, " m\xE9todo ").concat(req.method, " no autorizada}"));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
});
carritoRouter.post("/", function _callee3(req, res) {
  var carrito;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!Admin) {
            _context3.next = 10;
            break;
          }

          // console.log("post /");
          carrito = new Object();
          carrito.create_at = new Date();
          carrito.productos = []; // console.log('carrito', carrito);

          _context3.next = 6;
          return regeneratorRuntime.awrap(containerCarrito.save(carrito));

        case 6:
          idCarrito = _context3.sent;
          res.json(idCarrito);
          _context3.next = 11;
          break;

        case 10:
          res.json("{error : -1, descripcion: ruta ".concat(req.url, " m\xE9todo ").concat(req.method, " no autorizada}"));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
});
carritoRouter["delete"]("/:id", function _callee4(req, res) {
  var _idCarrito3, carritoDelete;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log('delete id');

          if (!Admin) {
            _context4.next = 10;
            break;
          }

          _idCarrito3 = req.params.id;
          _context4.next = 5;
          return regeneratorRuntime.awrap(containerCarrito.deleteById(_idCarrito3));

        case 5:
          carritoDelete = _context4.sent;
          console.log('carritoDelete', carritoDelete);

          if (carritoDelete) {
            res.json({
              message: "Borrado OK"
            });
          } else {
            res.json({
              message: "Error al Borrar",
              type: "id no encontrado"
            });
          }

          _context4.next = 11;
          break;

        case 10:
          res.json("{error : -1, descripcion: ruta ".concat(req.url, " m\xE9todo ").concat(req.method, " no autorizada}"));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
});
carritoRouter["delete"]("/:id/productos/:id_prod", function _callee5(req, res) {
  var _idCarrito4, carrito, idProducto, removeID, actualizado;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!Admin) {
            _context5.next = 16;
            break;
          }

          console.log("/:id/productos/:id_prod");
          _idCarrito4 = req.params.id;
          _context5.next = 5;
          return regeneratorRuntime.awrap(containerCarrito.getById(_idCarrito4));

        case 5:
          carrito = _context5.sent;

          if (carrito === undefined) {
            res.json({
              message: "id no encontrado"
            });
          } // console.log('carrito', carrito)


          idProducto = req.params.id_prod;
          removeID = carrito.productos.findIndex(function (pr) {
            return pr.id === parseInt(idProducto);
          });
          carrito.productos.splice(removeID, 1);
          _context5.next = 12;
          return regeneratorRuntime.awrap(containerCarrito.update(_idCarrito4, carrito));

        case 12:
          actualizado = _context5.sent;
          res.json("eliminado");
          _context5.next = 17;
          break;

        case 16:
          res.json("{error : -1, descripcion: ruta ".concat(req.url, " m\xE9todo ").concat(req.method, " no autorizada}"));

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = carritoRouter;