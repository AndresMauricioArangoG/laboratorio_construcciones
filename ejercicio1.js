function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computador1 = new Computador("HP", "Intel i5", "8GB", 2000000);
const computador2 = new Computador("Lenovo", "Intel i6", "8GB", 2500000);
const computador3 = new Computador("HP", "Intel i7", "16GB", 4000000);
console.log(computador1);
console.log(computador2);
console.log(computador3);