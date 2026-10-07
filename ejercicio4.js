function Libro(nombre, precio, autor, año) {
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
    this.año = año;
    this.prestado = false;

    this.prestar = function() {
        if (this.prestado === false) {
            this.prestado = true;
            return `El libro "${this.nombre}" fue prestado. Precio: ${this.precio}, Autor: ${this.autor}`;
        } else {
            console.log("El libro ya está prestado");
        }
    }

    this.devolver = function() {
        if (this.prestado === true) {
            this.prestado = false;
            return `El libro "${this.nombre}" fue devuelto. Precio: ${this.precio}, Autor: ${this.autor}`;
        } else {
            console.log("El libro no está prestado");
        }
    }
}

const libro1 = new Libro("Anita la tigresa", 10000, "Anita", 2000);

console.log(libro1.prestar());
console.log(libro1.devolver());