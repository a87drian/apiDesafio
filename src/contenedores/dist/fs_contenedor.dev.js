"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs");

var Contenedor =
/*#__PURE__*/
function () {
  function Contenedor(filename) {
    _classCallCheck(this, Contenedor);

    this.filename = filename; //console.log(this.filename)
  }

  _createClass(Contenedor, [{
    key: "save",
    value: function save(product) {
      var content, products, idmax;
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fs.promises.readFile("".concat(this.filename), "utf-8"));

            case 3:
              content = _context.sent;

              //let products = JSON.parse(content);
              // console.log("products" + products);
              //  console.log("content" + content);
              if (content === "") {
                product.id = 0;
                products = [];
              } else {
                console.log("else");
                products = JSON.parse(content); //product.id = products[products.length - 1].id + 1;

                idmax = Math.max.apply(Math, products.map(function (o) {
                  return o.id;
                })) + 1;
                product.id = idmax;
              }

              fs.promises.writeFile("./".concat(this.filename), JSON.stringify([].concat(_toConsumableArray(products), [product]), null, 2));
              return _context.abrupt("return", product.id);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log("Error:" + _context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var file, products, found;
      return regeneratorRuntime.async(function getById$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('getById'); // Recibe un id y devuelve el objeto con ese id, o null si no está.

              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(fs.promises.readFile("./".concat(this.filename), "utf-8"));

            case 4:
              file = _context2.sent;
              //console.log(file)
              products = JSON.parse(file);
              console.log('getById id', id);
              found = products.find(function (element) {
                if (element.id === parseInt(id)) {
                  return element;
                }
              });
              console.log('found', found);
              return _context2.abrupt("return", found);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log("Error:" + _context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[1, 12]]);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      var file, products;
      return regeneratorRuntime.async(function getAll$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fs.promises.readFile("./".concat(this.filename), "utf-8"));

            case 2:
              file = _context3.sent;

              if (file) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", "vacio");

            case 5:
              products = JSON.parse(file); // console.log('getall', products)

              return _context3.abrupt("return", products);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteById",
    value: function deleteById(id) {
      var file, products, removed, removeID;
      return regeneratorRuntime.async(function deleteById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(fs.promises.readFile("./".concat(this.filename), "utf-8"));

            case 2:
              file = _context4.sent;
              products = JSON.parse(file);

              if (!(products === '')) {
                _context4.next = 7;
                break;
              }

              _context4.next = 14;
              break;

            case 7:
              removeID = products.findIndex(function (pr) {
                return pr.id === parseInt(id);
              }); // console.log(products.findIndex((pr) => pr.id === parseInt(id)))
              // console.log('removeID ' + removeID)
              // console.log(products.splice(removeID, 1))

              removed = products.splice(removeID, 1); // console.log('removed', removed)

              if (!(removeID !== -1)) {
                _context4.next = 13;
                break;
              }

              //const listActualizada = products.splice(removeID, 1);
              //console.log('listActualizada' + listActualizada...)
              fs.promises.writeFile("./".concat(this.filename), JSON.stringify(products, null, 2));
              _context4.next = 14;
              break;

            case 13:
              return _context4.abrupt("return", undefined);

            case 14:
              return _context4.abrupt("return", removed);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var file;
      return regeneratorRuntime.async(function deleteAll$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return regeneratorRuntime.awrap(fs.promises.writeFile("./".concat(this.filename), "utf-8", ""));

            case 3:
              file = _context5.sent;
              _context5.next = 9;
              break;

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[0, 6]]);
    }
  }, {
    key: "update",
    value: function update(id, productUpdate) {
      var list, productSaved, indexProductSaved, productUpdated, file;
      return regeneratorRuntime.async(function update$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.getAll());

            case 2:
              list = _context6.sent;
              productSaved = list.find(function (item) {
                return item.id === parseInt(id);
              });
              indexProductSaved = list.findIndex(function (item) {
                return item.id === parseInt(id);
              });
              console.log("productSaved" + productSaved);

              if (!(productSaved === undefined)) {
                _context6.next = 9;
                break;
              }

              console.log("no existe id");
              return _context6.abrupt("return", null);

            case 9:
              productUpdated = _objectSpread({}, productSaved, {}, productUpdate);
              list[indexProductSaved] = productUpdated;
              _context6.next = 13;
              return regeneratorRuntime.awrap(fs.promises.writeFile("./".concat(this.filename), JSON.stringify(list, null, 2)));

            case 13:
              file = _context6.sent;
              return _context6.abrupt("return", productUpdated);

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "updateCarrito",
    value: function updateCarrito(id, productUpdate) {
      var list, carritoSaved, indexCarritoSaved;
      return regeneratorRuntime.async(function updateCarrito$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log('updateCarrito');
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
              console.log('list', list);

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