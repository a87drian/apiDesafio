const express = require('express');
const path = require('path');
const auth = require('./auth');

const homeWebRouter = express.Router();

homeWebRouter.get('/home', auth, (req, res) =>{
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
        nombre: req.session.nombre
    })
})


module.exports = homeWebRouter;