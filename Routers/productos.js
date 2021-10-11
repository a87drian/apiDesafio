const express = require('express');
const container = require('../contenedor')

const containerProducts = new container('./Products/productos.json');


const productosRouter = express.Router();

productosRouter.get('/', async (req, res)=>{
    const listProducts = await containerProducts.getAll();
    //console.log(listProducts)
    res.send(listProducts);
})
productosRouter.get('/:id', async (req, res) => {
    console.log('linea 15')
    const product = await containerProducts.getById(req.params.id);
    res.send(product);
})


productosRouter.post('/', async (req, res)=>{
    const newProduct = req.body;
    const id = await containerProducts.save(newProduct);
    console.log(req.body)
    // res.send(`ID: ${id}`);
    res.redirect('http://localhost:8080/list-productos')
});

productosRouter.put('/:id',async (req, res) => {
    const productId = req.params.id
    const product = req.body
    const productUpdate = await containerProducts.update(productId, product);
    
    if (productUpdate){
        res.send({
            
            message: 'ok',
            data: productUpdate
        })

    }else{
         res.send({
             message: 'wrong',
             data: productUpdate
         })
        
    }
})
productosRouter.delete(':/id', async (req, res) => {
    const productId = req.params.id
    const productUpdate = await containerProducts.deleteById(productId);
    res.send({
        message: "borrado ok"
    })

})
module.exports = productosRouter;