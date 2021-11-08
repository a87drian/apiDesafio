const {
    options,
    optionsSqlite
} = require('../options')
const knexMysql = require('knex')(options)
const knexSqlLite = require('knex')(optionsSqlite)


knexMysql.schema.createTable('products', (table)=>{
    table.increments('id');
    table.string('name');
    table.string('description');
    table.integer('code');
    table.string('photo');
    table.float('price');
    table.integer('stock');

})
.then(console.log('table products created'))
.catch((error)=>{console.log(error); throw error})
.finally(()=>{knexMysql.destroy()})

knexSqlLite.schema.createTable('messages', (table) => {
        table.increments('id');
        table.string('message');
        table.string('name');

    })
    .then(console.log('table messages created'))
    .catch((error) => {
        console.log(error);
        throw error
    })
    .finally(() => {
        knexSqlLite.destroy()
    })