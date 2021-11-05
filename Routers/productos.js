const express = require('express');
const container = require('../contenedor')

const containerProducts = new container('./Products/productos.json');


const productosRouter = express.Router();


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

productosRouter.get('/list-productos', async (req, res) => {
    const listProducts = await containerProducts.getAll();
    res.render('pages/index', {
        listProducts
    });
});
productosRouter.get('/product', (req, res) => {
    res.render('pages/product')
})

productosRouter.post('/form', async (req, res) => {
    const newProduct = req.body;
    console.log('body:' + newProduct)
    const id = await containerProducts.save(newProduct);
    res.redirect(`http://localhost:8080/api/productos/list-productos`)
});
productosRouter.get('/', async (req, res) => {
    const listProducts = await containerProducts.getAll();
    //console.log(listProducts)
    res.send(listProducts);
})
productosRouter.get('/:id', async (req, res) => {
    const product = await containerProducts.getById(req.params.id);
    
    if(product === undefined) {
        
        res.json({message:"id no encontrado"});
    }else{
        res.send(product)
    }
})
module.exports = productosRouter;