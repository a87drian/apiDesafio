const socket =  io.connect();

//socket.on('message', data => {console.log(object)})

const form = document.getElementById('chat');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    //console.log(document.getElementById('author').value)
        const message = {
            name: document.getElementById('author').value,
            message: document.getElementById('text').value
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

function render(messages) {
    const html = messages.map((elem, index) => {
        return (`<div>
            <strong>${elem.name}</strong>:
            <em>${elem.message}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function (data) {
    render(data);
});