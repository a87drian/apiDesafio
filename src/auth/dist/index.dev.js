"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webAuth = webAuth;
exports.apiAuth = apiAuth;

function webAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

function apiAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      error: 'no autenticado!'
    });
  }
}