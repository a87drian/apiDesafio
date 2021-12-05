//const { database } = require("firebase-admin");
const admin = require("firebase-admin");
const {firestore}  = require("../options");

class Contenedor {
  constructor() {

    const serviceAccount = require('../ecommerce-1c4a9-firebase-adminsdk-nybps-2b37302d78.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    const db = admin.firestore();
    // console.log('db', db)
    //const carritos = db.collection("carritos");
  }
  async save(product) {
    //console.log('product------->', product)
    const db = admin.firestore();
    const carritos = db.collection("carritos");

    console.log('firestore-------->', db)
    //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    console.log('carritos', carritos)
    try {
      //const doc = query.doc();
      const document = await carritos.doc().set(product);
      console.log(document);
      return document;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async getById(id) {
    console.log("getById");
    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    try {
      const doc = query.doc(id);
      const products = await doc.get();
      //console.log(file)
      return products;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async getAll() {
    // Devuelve un array con los objetos presentes en el archivo.
    try {
      const query = await query.get();
      const docs = query.docs;
      //console.log(file)

      return docs;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async deleteById(id) {
    try {
      const doc = query.doc(id);
      const deleted = await doc.delete();
      return deleted;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    //  Elimina todos los objetos presentes en el archivo.
    try {
      const doc = query.doc();
      const deleted = await doc.delete();
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, productUpdate) {
    try {
      const doc = query.doc(id);
      const products = doc.update(productUpdate);
      return products;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async updateCarrito(id, productUpdate) {
    console.log("updateCarrito");
    const list = await this.getAll();
    const carritoSaved = list.find((item) => item.id === parseInt(id));
    const indexCarritoSaved = list.findIndex(
      (item) => item.id === parseInt(id)
    );

    list[indexCarritoSaved] = carritoSaved;
    console.log("list", list);
  }
}
module.exports = Contenedor;