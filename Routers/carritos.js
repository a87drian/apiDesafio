const express = require('express');
const carritoRouter = express.Router();
const container = require('../contenedor');

const containerCarrito = new container('./Products/carrito.json');

let Admin = true;
// console.log('carrito.js '+Admin);

carritoRouter.get('/:id/productos', async (req, res) => {
    const idCarrito = req.params.id;
    const Carrito = await containerCarrito.getById(idCarrito);
    res.json(Carrito.productos)
});
carritoRouter.post('/:id/productos', async (req, res) => {
    const idCarrito = req.params.id;
    const carrito = await containerCarrito.getById(idCarrito);
    const producto = req.body;
    console.log('producto: ', req.body)
    
    const carritoUpdate = await containerCarrito.update(idCarrito, producto);
    res.json(carritoUpdate)


})

carritoRouter.post('/',async (req, res)=> {
    console.log('post /')
    const carrito = new Object();
    carrito.create_at = new Date();
    carrito.productos = [];
    console.log(carrito)
    idCarrito = await containerCarrito.save(carrito);
    res.json(idCarrito)
} );


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

carritoRouter.delete('/:id/productos/:id_prod', async (req,res)=>{
    console.log('/:id/productos/:id_prod')
    const idCarrito = req.params.id
    let carrito = await containerCarrito.getById(idCarrito);
    // console.log('carrito', carrito)
    const idProducto = req.params.id_prod;
    
    const removeID = carrito.productos.findIndex((pr) => pr.id === parseInt(idProducto));
    carrito.productos.splice(removeID, 1);
    const actualizado = await containerCarrito.update(idCarrito, carrito);
    res.json('eliminado')
}) 
module.exports = carritoRouter;