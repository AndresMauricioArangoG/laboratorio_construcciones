const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, año, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;
}

const marca1 = prompt("Ingrese la marca del vehículo 1: ");
const modelo1 = prompt("Ingrese el modelo del vehículo 1: ");
const año1 = prompt("Ingrese el año del vehículo 1: ");
const color1 = prompt("Ingrese el color del vehículo 1: ");
const precio1 = prompt("Ingrese el precio del vehículo 1: ");

const vehiculo1 = new Vehiculo(marca1, modelo1, año1, color1, precio1);

const marca2 = prompt("Ingrese la marca del vehículo 2: ");
const modelo2 = prompt("Ingrese el modelo del vehículo 2: ");
const año2 = prompt("Ingrese el año del vehículo 2: ");
const color2 = prompt("Ingrese el color del vehículo 2: ");
const precio2 = prompt("Ingrese el precio del vehículo 2: ");

const vehiculo2 = new Vehiculo(marca2, modelo2, año2, color2, precio2);

const marca3 = prompt("Ingrese la marca del vehículo 3: ");
const modelo3 = prompt("Ingrese el modelo del vehículo 3: ");
const año3 = prompt("Ingrese el año del vehículo 3: ");
const color3 = prompt("Ingrese el color del vehículo 3: ");
const precio3 = prompt("Ingrese el precio del vehículo 3: ");

const vehiculo3 = new Vehiculo(marca3, modelo3, año3, color3, precio3);

console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);