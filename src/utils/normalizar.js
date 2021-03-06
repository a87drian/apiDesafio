const { Schema } = require('mongoose')
const {normalize, schema} = require('normalizr')

const schemaAuthor = new schema.Entity('author',{},{idAttribute: 'id'});

const schemaMessage = new schema.Entity('message',{
    author: schemaAuthor
});

const schemaMessages = new schema.Entity('messages',{
    messages: [schemaMessage]
});

const normalizeMessages = (messages) => {
    return normalize(messages, schemaMessages)
}

module.exports ={normalizeMessages}