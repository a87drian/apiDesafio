"use strict";

// const session = require('express-session');
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var createHash = require('../utils/createHash');

var path = require('path');

var _require = require('../options'),
    mongodb = _require.mongodb;

var mongoose = require('mongoose');

var express = require("express");

var authWebRouter = express.Router();

var User = require('../models/User');
/*const conexion = mongoose.connect(mongodb.host, mongodb.options)
               .then(() => console.log("mongo conectado"))
               .catch(() => console.log("mongo no conectado"))
*/


authWebRouter.get('/login', function (req, res) {
  //  if (req.isAuthenticated()) { 
  console.log('hola'); // }
  //     res.redirect('/')
  // } else {

  res.render(path.join(process.cwd(), '/views/pages/login.ejs')); // }
});
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
passport.use('login', new LocalStrategy(function (username, password, done) {
  User.findOne({
    email: username
  }, function (error, user) {
    console.log({
      error: error,
      user: user
    });
    return done(null, {});
  });
}));
passport.use('singup', new LocalStrategy({
  passReqToCallback: true
}, function (req, username, password, done) {
  User.findOne({
    email: username
  }, function (error, user) {
    if (err) {
      console.log('Error in SignUp: ' + err);
      return done(err);
    }

    if (user) {
      console.log('User already exists');
      return done(null, false);
    }

    var newUser = {
      username: username,
      password: createHash(password),
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };
    User.create(newUser, function (error, userCreated) {
      if (error) {
        console.log('Error in Saving user: ' + err);
        return done(err);
      }

      console.log(user);
      console.log('User Registration succesful');
      return done(null, userCreated);
    });
  });
}));
authWebRouter.post('/auth/local', passport.authenticate('login', {
  failureRedirect: '/faillogin'
}), function (req, res) {
  res.redirect('/');
});
authWebRouter.get('/faillogin', function (req, res) {
  res.render(path.join(process.cwd(), '/views/pages/login-error.ejs')); // res.render(path.join(process.cwd(), '/views/pages/login.ejs'))
});
authWebRouter.get('/failsignup', function (req, res) {
  res.render(path.join(process.cwd(), '/views/pages/signup-error.ejs'));
}); //#region

/*
authWebRouter.get('/', (req, res) =>{
    res.redirect('/home')
})

authWebRouter.get('/login' , (req, res)=> {
    const nombre = req.session?.nombre
    if(nombre){
    res.redirect('/')

    }else{
        res.render(path.join(process.cwd(), 'views/pages/login.ejs'))
    }

})
authWebRouter.get('/logout', (req, res)=> {
     const nombre = req.session?.nombre
     if (nombre) {
         req.session.destroy(err=>{
             if(err){
                 res.redirect('/')
             }else{
                 res.render(path.join(process.cwd(), '/views/pages/logout.ejs'), {nombre})
             }
         })
     }else{
                 res.redirect('/')

     }
})
authWebRouter.post('/login', (req,res)=>{
    console.log('login')
    req.session.nombre = req.body.nombre;
    res.redirect('/home')
})*/
//#endregion

module.exports = authWebRouter;