const socket =  io.connect();
console.log('hola')
//socket.on('message', data => {console.log(object)})

const form = document.getElementById('chat');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    //console.log(document.getElementById('author').value)
        const message = {
            author: document.getElementById('author').value,
            text: document.getElementById('text').value
        }
        socket.emit('new-message', message);
        return false;
})

// const addMessage = () => {
//     const message = {
//         author: document.getElementById('Email').value,
//         text: document.getElementById('Message').value
//     }
//     socket.emit('new-message', message);
//     return false;
// }

function render(data) {
    const html = data.map((elem, index) => {
        return (`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function (data) {
    render(data);
});