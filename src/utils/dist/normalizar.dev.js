"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema;

var _require2 = require('normalizr'),
    normalize = _require2.normalize,
    schema = _require2.schema;

var schemaAuthor = new schema.Entity('author', {}, {
  idAttribute: 'id'
});
var schemaMessage = new schema.Entity('message', {
  author: schemaAuthor
});
var schemaMessages = new schema.Entity('messages', {
  messages: [schemaMessage]
});

var normalizeMessages = function normalizeMessages(messages) {
  return normalize(messages, schemaMessages);
};

module.exports = {
  normalizeMessages: normalizeMessages
};