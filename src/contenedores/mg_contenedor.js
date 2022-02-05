const mongoose = require('mongoose');
const { CLIENT_LONG_FLAG } = require('mysql/lib/protocol/constants/client');
const {mongodb} = require('../options');
console.log(mongodb.host);

//const {host, options}  = require('./options');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:dbPassword@cluster0.vlpmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




class Contenedor {
    constructor(collection, schema) {
        this.collection = mongoose.model(collection, schema);
        this.schema = schema;
       /* this.conexion = mongoose.connect(mongodb.uri, mongodb.options)
        .then(()=> console.log("mongo conectado"))
        .catch(()=> console.log("mongo no conectado"))*/
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
});

    }
    async save(product) {
        //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
        console.log(product)
        try {
            const document = await this.collection.create(product);
            console.log('documemnt', document)
            console.log(document._id)
            return document._id

        } catch (error) {
            console.log("Error:" + error);
        }
    }
    async getById(id) {
        console.log('getById')
        // Recibe un id y devuelve el objeto con ese id, o null si no está.

        try {
            const products = this.collection.find({
                _id: id
            })
                
            //console.log(file)

            return products;
        } catch (error) {
            console.log("Error:" + error);
        }
    }
    async getAll() {
        // Devuelve un array con los objetos presentes en el archivo.
        try {
            const products = this.collection.find({})
                
            //console.log(file)

            return products;
        } catch (error) {
            console.log("Error:" + error);
        }
    }
    async deleteById(id) {
        try {
            const deleted = this.collection.deleteOne({ _id: id })
            return deleted
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll() {
        //  Elimina todos los objetos presentes en el archivo.
        try {
            this.collection.deleteMany({});
        } catch (error) {
            console.log(error);
        }
    }
    async update(id, productUpdate) {
        try {
            const products = this.collection({_id:id}, {$set: productUpdate})
            return products;
        } catch (error) {
            console.log("Error:" + error);
        }

    }
    // async updateCarrito(id, productUpdate) {
    //     console.log('updateCarrito')
    //     const list = await this.getAll();
    //     const carritoSaved = list.find((item) => item.id === parseInt(id))
    //     const indexCarritoSaved = list.findIndex((item) => item.id === parseInt(id));

    //     list[indexCarritoSaved] = carritoSaved
    //     console.log('list', list)

    // }
}
module.exports = Contenedor;