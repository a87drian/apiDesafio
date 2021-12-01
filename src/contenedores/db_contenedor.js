
const knex = require('knex')

class Contenedor {
  constructor(config, table) {
    this.table = table;
    this.config = config;
    this.conexion = knex(this.config)
  }
  async save(product) {
    //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    console.log(product)
    try {
      const [id] = await this.conexion(this.table).insert(product);
      return id
      
    } catch (error) {
      console.log("Error:" + error);
    } 
  }
  async getById(id) {
    console.log('getById')
    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    
    try {
      const products = this.conexion.from(this.table)
      .select('*').where('id','=', id)
      //console.log(file)
     
      return products;
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  async getAll() {
    // Devuelve un array con los objetos presentes en el archivo.
     try {
       const products = this.conexion.from(this.table)
         .select('*')
       //console.log(file)

       return products;
     } catch (error) {
       console.log("Error:" + error);
     }
  }
  async deleteById(id) {
       try {
        const deleted = this.conexion.from(this.table).where('id',id).del();
        return deleted
       } catch (error) {
         console.log(error);
       }
  }
  async deleteAll() {
    //  Elimina todos los objetos presentes en el archivo.
    try {
      this.conexion.from(this.table).del();
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, productUpdate) {
    try {
      const products = this.conexion.from(this.table)
      .where( 'id', id)
      .update(
        {
              "name": productUpdate.name,
              "description": productUpdate.description,
              "code": productUpdate.code,
              "photo": productUpdate.photo,
              "price": productUpdate.price,
              "stock": productUpdate.code
        }
      )
      return products;
    } catch (error) {
      console.log("Error:" + error);
    }
    
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
