const express = require('express');
const carritoRouter = express.Router();
const container = require('../contenedor');

const containerCarrito = new container('./Products/carrito.json');

let Admin = true;
// console.log('carrito.js '+Admin);
carritoRouter.get('/', async (req, res) => {
    const ListCarrito = await containerCarrito.getAll();
    res.json(ListCarrito)
});
carritoRouter.post('/',async (req, res)=> {
    
    const carrito = new Object();
    carrito.create_at = new Date();
    carrito.producto = [];
    console.log(carrito)
    idCarrito = await containerCarrito.save(carrito);
    res.json(idCarrito)
} );

carritoRouter.post('/:id/productos', (req, res) => {

})
carritoRouter.delete('/:id', async (req, res) => {
    const idCarrito = req.params.id
    const carritoDelete = await containerCarrito.deleteById(idCarrito);
    if (carritoDelete){
        res.json({
            message: "Borrado OK"
        })
    }else{
        res.json({
            message: "Error al Borrar"
        })
    }
})

carritoRouter.delete('/:id/productos/:id_prod', (req,res)=>{

}) 
module.exports = carritoRouter;