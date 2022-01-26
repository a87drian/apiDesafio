const path = require('path');
const { createLogger } = require('winston');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, 'config.env')
});


const PRODUCTOS = 'mongodb';
const CARRITOS = 'firestore'
const optionsMysql = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: process.env.OPTIONSMYSQL_CONNECTION_PORT,
        user: process.env.OPTIONSMYSQL_USER ,
        password: process.env.OPTIONSMYSQL_PASSWORD,
        database: process.env.OPTIONSMYSQL_DATABASE
    },
    pool: {
        min: 0,
        max: 7
    }

};
const optionsSqlite = {
    client: 'sqlite3',
    connection: {
        filename: process.env.OPTIONSSQLITE_CLIENT_CONNECTION_FILENAME
    },
    useNullAsDefault: true
};
const mongodb = {
    host: process.env.MONGODB_HOST,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }

};

const FIRESTORE = {
    type: "service_account",
    project_id: process.env.FIRESTORE_PROJECT_ID,
    private_key_id: process.env.FIRESTORE_PRIVATE_KEY_ID,
    private_key: process.env.FIRESTORE_PRIVATE_KEY,
    client_email: "firebase-adminsdk-nybps@ecommerce-1c4a9.iam.gserviceaccount.com",
    client_id: process.env.FIRESTORE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nybps%40ecommerce-1c4a9.iam.gserviceaccount.com"
};



module.exports = {
    optionsMysql,
    optionsSqlite,
    mongodb,
    FIRESTORE,
    PRODUCTOS,
    CARRITOS
};
