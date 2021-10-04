const express = require('express');
const productosRouter = require('./Routers/productos');

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use('/static', express.static('public'))

server.get('/', (req, res) => {
    res.send({message: new Date().toLocaleDateString()})
})

const PORT = 8080;

server.use('/api/productos', productosRouter);

server.listen(PORT, ()=> {
    console.log(`server on ${PORT}`)
})