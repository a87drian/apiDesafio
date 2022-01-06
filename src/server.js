const express = require('express');
const productosRouter = require('./Routers/productos');
const carritoRouter = require('./Routers/carritos')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io');
const { getMessages, saveMessages } = require('./models/messages');
const faker = require('faker');
const session = require('express-session');
const authWebRouter = require('./auth/auth');
const homeWebRouter = require('./auth/home');
const randomsRouter = require('./Routers/random');


const server = express();
const httpServer = new HttpServer(server)
const io = new IOServer(httpServer)



server.set('view engine','ejs')
server.use(express.json())
server.use(express.urlencoded({extended: true}))
// server.use('/static', express.static('public'))
//server.use(express.static('public'))

// server.get('/', (req, res) => {
//     res.send({message: new Date().toLocaleDateString()})
// })

const PORT = process.env.PORT || 8082;

server.use('/api/productos', productosRouter);
server.use('/api/carrito', carritoRouter);
server.use(randomsRouter);


server.get('/test', (req, res)=>{
    const products = [...new Array(5)].map((_, i) => ({
        id: i,
        title: faker.commerce.product(),
        title: faker.commerce.price(),
        thumbnail: faker.image.imageUrl()
    }))
    res.json(products)
})

server.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        maxAge: 60000
    }
}))
server.use(authWebRouter)
server.use(homeWebRouter)

// server.listen(PORT, ()=> {
//     console.log(`server on ${PORT}`)
// })



// server.listen(PORT, ()=> {
//     console.log(`server on ${PORT}`)
// })

httpServer.listen(PORT, function () {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

// const messages = [
//     {
//         author: "Juan",
//         text: "¡Hola! ¿Que tal?"
//     }, {
//         author: "Pedro",
//         text: "¡Muy bien! ¿Y vos?"
//     }, {
//         author: "Ana",
//         text: "¡Genial!"
//     }

// ]

// io.on('connection', async (socket) => { 
//     //console.log('Usuario conectado')
//     const messages = await getMessages();
//     console.log('get messages', messages)
//     socket.emit('messages:', messages)
    
//     socket.on('new-message', async (message) => {
//          await saveMessages(message);
//         //  console.log('socket on',messages)
//          io.sockets.emit('messages', messages);
//      });

// })
