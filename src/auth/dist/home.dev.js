"use strict";

var express = require('express');

var path = require('path');

var auth = require('./auth');

var homeWebRouter = express.Router();
homeWebRouter.get('/home', auth, function (req, res) {
  res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
    nombre: req.session.nombre
  });
});
module.exports = homeWebRouter;