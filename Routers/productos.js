const express = require('express');
// const container = require('../fs_contenedor');
 const container = require('../db_contenedor');
 const {options} = require('../DB/options')

const { Socket } = require('../node_modules/socket.io/dist');

const containerProducts = new container(options,'products');


const productosRouter = express.Router();

productosRouter.delete('/:id', async (req, res) => {
    const productId = req.params.id
    console.log('delete', productId)
    const productUpdate = await containerProducts.deleteById(productId);
    res.send({
        message: "borrado ok"
    })

})


productosRouter.post('/', async (req, res)=>{
    console.log('post')
    const newProduct = req.body;
    const id = await containerProducts.save(newProduct);
    console.log(req.body)
    // res.send(`ID: ${id}`);
    res.redirect('http://localhost:8080/list-productos')
});

productosRouter.put('/:id',async (req, res) => {
    console.log('put')
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
productosRouter.get('/list-productos', async (req, res) => {
    console.log('get')
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
    const product = await containerProducts.getById(req.params.id);
    
    if(product === undefined) {
        
        res.json({message:"id no encontrado"});
    }else{
        res.send(product)
    }
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