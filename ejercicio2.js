function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

  this.presentarse = function() {
    return `El nombre de la mascota es: ${this.nombre}, 
    La especie de la mascota es: ${this.especie}, 
    La edad de la mascota es: ${this.edad}, 
    El peso de la mascota es: ${this.peso}`;
}}
const Mascota1 = new Mascota("Haku", "Perro", "3 años", "30 kilos");
const Mascota2 = new Mascota("Zero", "Zorro", "4 años", "35 kilos");
const Mascota3 = new Mascota("Dante", "Lobo", "6 años", "60 kilos");

console.log(Mascota1.presentarse());
console.log(Mascota2.presentarse());
console.log(Mascota3.presentarse())