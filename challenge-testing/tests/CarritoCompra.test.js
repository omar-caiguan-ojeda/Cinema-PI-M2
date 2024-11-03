const CarritoCompra = require("./index");

describe("CarritoCompra", () => {
    it("Debe tener un constructor que inicializa como un array vacío", () => {
        const carrito = new CarritoCompra([]);
        expect(Array.isArray(carrito.cart)).toBe(true);
        expect(carrito.cart.length).toBe(0);
        expect(carrito.cart).toEqual([]);
    });

    it("Debe tener un método agregarProducto que agrega un nuevo producto al carrito", () => {
        const carrito = new CarritoCompra();
        expect(carrito.agregarProducto).toBeDefined();
        expect(carrito.calcularTotal()).toBe(0);

        carrito.agregarProducto({ name: "Zapatilla", price: 10 });
        expect(carrito.cart.length).toBe(1);

        carrito.agregarProducto({ name: "Remera", price: 10 });
        carrito.agregarProducto({ name: "Pantalón", price: 10 });

        expect(carrito.cart).toContainEqual({ name: "Zapatilla", price: 10 });
        expect(carrito.cart).toContainEqual({ name: "Remera", price: 10 });
        expect(carrito.cart).toContainEqual({ name: "Pantalón", price: 10 });
        expect(carrito.cart.length).toBe(3);
    });

    it("Debe tener el método calcularTotal que devuelve la suma total de la compra", () => {
        const carrito = new CarritoCompra();
        expect(carrito.calcularTotal).toBeDefined();

        carrito.agregarProducto({ name: "Zapatilla", price: 10 });
        carrito.agregarProducto({ name: "Remera", price: 10 });
        carrito.agregarProducto({ name: "Pantalón", price: 10 });

        expect(carrito.calcularTotal()).toBe(30);
    });

    it("Debe tener el método aplicarDescuento que aplica un porcentaje de descuento sobre el total", () => {
        const carrito = new CarritoCompra();
        expect(carrito.aplicarDescuento).toBeDefined();

        // Caso: carrito vacío, descuento del 10%
        expect(carrito.calcularTotal()).toBe(0);
        expect(carrito.aplicarDescuento(10)).toBe(0);

        // Caso: total de 30, descuento del 10%
        carrito.agregarProducto({ name: "Zapatilla", price: 10 });
        carrito.agregarProducto({ name: "Remera", price: 10 });
        carrito.agregarProducto({ name: "Pantalón", price: 10 });
        expect(carrito.aplicarDescuento(10)).toBe(27);
    });

    it("Debe aplicar correctamente un descuento del 0% y del 100%", () => {
        const carrito = new CarritoCompra();

        carrito.agregarProducto({ name: "Chaqueta", price: 50 });
        carrito.agregarProducto({ name: "Balón", price: 50 });

        expect(carrito.aplicarDescuento(0)).toBe(100);  // Descuento del 0%
        expect(carrito.aplicarDescuento(100)).toBe(0);  // Descuento del 100%
    });
});
