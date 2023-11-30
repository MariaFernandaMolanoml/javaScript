/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name The Product Name
   * @param {number} precio The Product Price
   * @param {number} cantidad
   * @param {number} year The year creation of the Product
   */
  constructor(name, precio, cantidad, year) {
    this.name = name;
    this.precio = precio;
    this.cantidad=cantidad;
    this.year = year;
  }
}
