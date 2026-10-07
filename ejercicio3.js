function Estudiante(nombre, curso, edad, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.edad = edad;
    this.nota = nota;
    this["aprobado"] = nota >= 3.0;

    this.mostrarResultado = function() {
        return`El estudiante ${this.nombre}, de ${this.edad} años, pertenece al curso de ${this.curso}.
         Obtuvo una nota de ${this.nota}. ¿Aprobó? ${this.aprobado}
    `}
}

const Estudiante1 = new Estudiante("Andres", "Java", "25 años", 2.5);
const Estudiante2 = new Estudiante("Pepito", "Javascript", "225 años", 2.7);
const Estudiante3 = new Estudiante("Juanito", "php", "65 años", 1.5);
const Estudiante4 = new Estudiante("Carlo", "cocina", "15 años", 4.5);

console.log(Estudiante1.mostrarResultado())
console.log(Estudiante2.mostrarResultado())
console.log(Estudiante3.mostrarResultado())
console.log(Estudiante4.mostrarResultado())