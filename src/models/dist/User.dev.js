"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
});
var UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;