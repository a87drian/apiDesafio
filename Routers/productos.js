const express = require('express');
const container = require('../contenedor');
const { Socket } = require('../node_modules/socket.io/dist');

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
    //devuelve el form de products
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
    console.log('linea 15')
    const product = await containerProducts.getById(req.params.id);
    res.send(product);
})
const addMessage = () => {
    const message = {
        author: document.getElementById().value,
        text: document.getElementById().value
    }
    socket.emit('new-message', message);
    return false;
}
module.exports = productosRouter;