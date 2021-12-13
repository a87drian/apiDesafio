const express = require('express');
const path = require('path');

const authWebRouter = express.Router();

authWebRouter.get('/', (req, res) =>{
    res.redirect('/home')
})

authWebRouter.get('/loguin' , (req, res)=> {
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
})
module.exports = authWebRouter;