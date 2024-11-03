class CarritoCompra {
    constructor() {
      this.cart = [];
    }
  
    agregarProducto(producto) {
      this.cart.push(producto);
    }
  
    calcularTotal() {
      return this.cart.reduce((total, producto) => total + producto.price, 0);
    }
  
    aplicarDescuento(porcentaje) {
      const total = this.calcularTotal();
      return total - (total * (porcentaje / 100));
    }
  }
  
  module.exports = CarritoCompra;
  