const options = {
    client: 'mysql',
    connection:{
    host:'localhost',
    port:3307,
    user:'root',
    password: 'bv3yr0n',
    database:'testdb'
    },
    pool: {min:0, max:7}

};
const optionsSqlite = {
    client: 'sqlite3',
    connection: {filename: './ecommerce.sqlite3'},
    useNullAsDefault: true
}

module.exports = {
    options,
    optionsSqlite
};