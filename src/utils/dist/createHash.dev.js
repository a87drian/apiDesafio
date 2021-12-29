"use strict";

var bcrypt = require('bcrypt');

var createHash = function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = createHash;