const express = require('express');
const productosRouter = require('./Routers/productos');

const server = express();

server.set('view engine','ejs')
server.use(express.json())
server.use(express.urlencoded({extended: true}))
//server.use('/static', express.static('public'))

server.get('/', (req, res) => {
    res.send({message: new Date().toLocaleDateString()})
})
server.get('/list-productos', async (req, res) => {
    //const listProducts = await containerProducts.getAll();
    const listProducts = [{
                "title": "Escuadra",
                "price": 123.45,
                "id": 1
            },
            {
                "title": "Calculadora",
                "price": 234.56,
                "id": 2
            }]
    res.render('pages/index', {listProducts});
})

const PORT = 8080;

server.use('/api/productos', productosRouter);


server.listen(PORT, ()=> {
    console.log(`server on ${PORT}`)
})