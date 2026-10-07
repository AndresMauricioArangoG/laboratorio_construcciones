# Andrés Mauricio Arango Grisales

1.
No se debe repetir tanto código. Si no tuviéramos la función constructora se vería súper desordenado porque tendríamos que crear cada computador por separado. Además, imaginando que no fueran solo 3 computadores sino 100, el código sería muy difícil de leer y organizar.

2.
No me quedó muy clara la pregunta, pero lo que entendí en el ejercicio es que lo que diferencia una función de un método es que los métodos están dentro de un objeto, pero a la vez esos métodos son funciones.

Al usar `this`, el método puede acceder a las propiedades del objeto. Por ejemplo, en `presentarse` tenemos el `return` con los datos de la mascota y utilizamos `this` para acceder a su nombre, especie, edad y peso. Luego, en el `console.log`, llamamos a cada mascota junto con el método `presentarse()`.

3.
La ventaja es que el objeto puede conocer por sí mismo su estado sin tener que calcularlo nuevamente cada vez que necesitemos saberlo. En este caso, el estudiante sabe automáticamente si aprobó o no dependiendo de su nota, ya que `aprobado` queda como `true` o `false` no tenemos que por ejemplo hacer un condicional que diga si la nota es mayor que 3
muestrame true o algo por el estilo

4.Si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos, el programa podría permitir la operación nuevamente sin darse cuenta de que el libro ya estaba prestado. Esto puede generar errores, porque no se estaría controlando correctamente el estado del objeto.
