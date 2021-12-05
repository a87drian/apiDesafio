const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
    //console.log(this.filename)
  }
  async save(product) {
    //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    try {
      const content = await fs.promises.readFile(`${this.filename}`, "utf-8");
      let products;
      //let products = JSON.parse(content);
      // console.log("products" + products);
    //  console.log("content" + content);
      if (content === "") {
        product.id = 0;
        products = [];
      } else {
        console.log("else");
        products = JSON.parse(content);
        //product.id = products[products.length - 1].id + 1;
        let idmax = Math.max.apply(Math, products.map(o => o.id)) + 1;
        product.id =idmax;
      }

      fs.promises.writeFile(
        `./${this.filename}`,
        JSON.stringify([...products, product], null, 2)
      );

      return product.id;

    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async getById(id) {
    console.log('getById')
    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    
    try {
      const file = await fs.promises.readFile(`./${this.filename}`, "utf-8");
      //console.log(file)
      const products = JSON.parse(file);
      console.log('getById id', id)
      const found = products.find((element) => {
        if (element.id === parseInt(id)) {
          return element;
        }
      });
      console.log('found', found);
      return found;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async getAll() {
    // Devuelve un array con los objetos presentes en el archivo.
    const file = await fs.promises.readFile(`./${this.filename}`, "utf-8");
    // console.log('file', file)
    if (!file) {
      return "vacio";
    }
    const products = JSON.parse(file);
    // console.log('getall', products)
    return products;
  }
  async deleteById(id) {
    //  Elimina del archivo el objeto con el id buscado.
    const file = await fs.promises.readFile(`./${this.filename}`, "utf-8");
    const products = JSON.parse(file);
    let removed
    if (products === ''){}
    else{
      const removeID =  products.findIndex((pr) => pr.id === parseInt(id));
      // console.log(products.findIndex((pr) => pr.id === parseInt(id)))
      // console.log('removeID ' + removeID)
      // console.log(products.splice(removeID, 1))
      removed = products.splice(removeID, 1);
      // console.log('removed', removed)
      if (removeID !== -1) {
        //const listActualizada = products.splice(removeID, 1);
        //console.log('listActualizada' + listActualizada...)
        fs.promises.writeFile(
          `./${this.filename}`,
          JSON.stringify(products, null, 2)
        );
      }else {
        return undefined
      }
     }
    return removed;
   // console.log("deleteById", products);
  }
  async deleteAll() {
    //  Elimina todos los objetos presentes en el archivo.
    try {
      const file = await fs.promises.writeFile(
        `./${this.filename}`,
        "utf-8",
        ""
      );
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, productUpdate) {
    const list = await this.getAll();
    const productSaved = list.find((item) => item.id === parseInt(id));
    
    const indexProductSaved = list.findIndex(
      (item) => item.id === parseInt(id)
    );
    console.log("productSaved" + productSaved);
    if (productSaved === undefined) {
      console.log("no existe id");
      return null;
    }
    const productUpdated = {
      ...productSaved,
      ...productUpdate,
    };
    list[indexProductSaved] = productUpdated;

    const file = await fs.promises.writeFile(
      `./${this.filename}`,
      JSON.stringify(list, null, 2)
    );
    return productUpdated;
  }
  async updateCarrito(id, productUpdate) {
    console.log('updateCarrito')
    const list = await this.getAll();
    const carritoSaved = list.find((item) => item.id === parseInt(id))
    const indexCarritoSaved = list.findIndex((item) => item.id === parseInt(id));

    list[indexCarritoSaved] = carritoSaved
    console.log('list', list)
    
  }
}
module.exports = Contenedor;
