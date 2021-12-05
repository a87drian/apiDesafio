"use strict";

// const { normalize } = require("normalizr");
var socket = io.connect(); //socket.on('message', data => {console.log(object)})

var schemaAuthor = new normalizr.schema.Entity('author', {}, {
  idAttribute: 'email'
});
var schemaMessage = new normalizr.schema.Entity('message', {
  author: schemaAuthor
});
var schemaMessages = new normalizr.schema.Entity('messages', {
  messages: [schemaMessage]
});
var form = document.getElementById('chat');
form.addEventListener('submit', function (e) {
  e.preventDefault(); //console.log(document.getElementById('author').value)

  var message = {
    id: 4,
    author: {
      id: document.getElementById('author').value,
      nombre: document.getElementById('author').value
    },
    text: document.getElementById('text').value
  };
  socket.emit('new-message', message);
  return false;
});

function render(messages) {
  console.log('render', messages);
  var arrayMessages = [];
  var html = messages.messages.map(function (elem, index) {
    console.log('elem', elem);
    return "<div>\n            <strong>".concat(elem.author.nombre, "</strong>:\n            <em>").concat(elem.text, "</em> </div>");
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function (data) {
  var dataDenormalized = normalizr.denormalize(data.result, schemaMessages, data.entities); // render(data);

  console.log('dataDenormalized', dataDenormalized);
  render(dataDenormalized);
});