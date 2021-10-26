const express = require('express');
const productosRouter = require('./Routers/productos');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')


const server = express();
const httpServer = new HttpServer(server)
const io = new IOServer(httpServer)



server.set('view engine','ejs')
server.use(express.json())
server.use(express.urlencoded({extended: true}))
// server.use('/static', express.static('public'))
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.send({message: new Date().toLocaleDateString()})
})

const PORT = 8080;

server.use('/api/productos', productosRouter);
server.use('/api/carrito', carritoRouter);




// server.listen(PORT, ()=> {
//     console.log(`server on ${PORT}`)
// })

httpServer.listen(8080, function () {
    console.log('Servidor corriendo en http://localhost:8080');
})

const messages = [
    {
        author: "Juan",
        text: "¡Hola! ¿Que tal?"
    }, {
        author: "Pedro",
        text: "¡Muy bien! ¿Y vos?"
    }, {
        author: "Ana",
        text: "¡Genial!"
    }

]

io.on('connection', (socket) => { 
    console.log('Usuario conectado')
    socket.emit('messages:', messages)
     socket.on('new-message', data => {
         messages.push(data);
         io.sockets.emit('messages', messages);
     });

})
