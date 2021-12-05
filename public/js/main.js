// const { normalize } = require("normalizr");

const socket =  io.connect();

//socket.on('message', data => {console.log(object)})
const schemaAuthor = new normalizr.schema.Entity('author', {}, {
    idAttribute: 'email'
});

const schemaMessage = new normalizr.schema.Entity('message', {
    author: schemaAuthor
});

const schemaMessages = new normalizr.schema.Entity('messages', {
    messages: [schemaMessage]
});

const form = document.getElementById('chat');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    //console.log(document.getElementById('author').value)
        const message = {
            id:4,
            author:{
                id: document.getElementById('author').value,
                nombre: document.getElementById('author').value
                

            },
            text: document.getElementById('text').value
        }
        socket.emit('new-message', message);
        return false;
})


function render(messages) {
    console.log('render', messages)
    const arrayMessages = []
    
    const html = messages.messages.map((elem, index) => {
        console.log('elem', elem)
        return (`<div>
            <strong>${elem.author.nombre}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
    
}

socket.on('messages', function (data) {
    const dataDenormalized = normalizr.denormalize(data.result, schemaMessages, data.entities)
    
    // render(data);
    console.log('dataDenormalized', dataDenormalized)
    render(dataDenormalized);
});