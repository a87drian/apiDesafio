"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//const { database } = require("firebase-admin");
var admin = require("firebase-admin");

var _require = require("../options"),
    firestore = _require.firestore;

var Contenedor =
/*#__PURE__*/
function () {
  function Contenedor() {
    _classCallCheck(this, Contenedor);

    var serviceAccount = require('../ecommerce-1c4a9-firebase-adminsdk-nybps-2b37302d78.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    var db = admin.firestore(); // console.log('db', db)
    //const carritos = db.collection("carritos");
  }

  _createClass(Contenedor, [{
    key: "save",
    value: function save(product) {
      var db, carritos, document;
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //console.log('product------->', product)
              db = admin.firestore();
              carritos = db.collection("carritos");
              console.log('firestore-------->', db); //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

              console.log('carritos', carritos);
              _context.prev = 4;
              _context.next = 7;
              return regeneratorRuntime.awrap(carritos.doc().set(product));

            case 7:
              document = _context.sent;
              console.log(document);
              return _context.abrupt("return", document);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              console.log("Error:" + _context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 12]]);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var doc, products;
      return regeneratorRuntime.async(function getById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("getById"); // Recibe un id y devuelve el objeto con ese id, o null si no está.

              _context2.prev = 1;
              doc = query.doc(id);
              _context2.next = 5;
              return regeneratorRuntime.awrap(doc.get());

            case 5:
              products = _context2.sent;
              return _context2.abrupt("return", products);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              console.log("Error:" + _context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var _query, docs;

      return regeneratorRuntime.async(function getAll$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_query.get());

            case 3:
              _query = _context3.sent;
              docs = _query.docs; //console.log(file)

              return _context3.abrupt("return", docs);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log("Error:" + _context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      var doc, deleted;
      return regeneratorRuntime.async(function deleteById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              doc = query.doc(id);
              _context4.next = 4;
              return regeneratorRuntime.awrap(doc["delete"]());

            case 4:
              deleted = _context4.sent;
              return _context4.abrupt("return", deleted);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var doc, deleted;
      return regeneratorRuntime.async(function deleteAll$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              doc = query.doc();
              _context5.next = 4;
              return regeneratorRuntime.awrap(doc["delete"]());

            case 4:
              deleted = _context5.sent;
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "update",
    value: function update(id, productUpdate) {
      var doc, products;
      return regeneratorRuntime.async(function update$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              doc = query.doc(id);
              products = doc.update(productUpdate);
              return _context6.abrupt("return", products);

            case 6:
              _context6.prev = 6;
              _context6.t0 = _context6["catch"](0);
              console.log("Error:" + _context6.t0);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "updateCarrito",
    value: function updateCarrito(id, productUpdate) {
      var list, carritoSaved, indexCarritoSaved;
      return regeneratorRuntime.async(function updateCarrito$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log("updateCarrito");
              _context7.next = 3;
              return regeneratorRuntime.awrap(this.getAll());

            case 3:
              list = _context7.sent;
              carritoSaved = list.find(function (item) {
                return item.id === parseInt(id);
              });
              indexCarritoSaved = list.findIndex(function (item) {
                return item.id === parseInt(id);
              });
              list[indexCarritoSaved] = carritoSaved;
              console.log("list", list);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Contenedor;
}();

module.exports = Contenedor;