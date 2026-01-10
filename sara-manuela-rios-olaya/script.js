/* DEFINICIONES Y CONCEPTOS 
1. MUTABILIDAD: aplicado al contexto de los métodos mutables, es cuando se modifica un arreglo u objeto original directamente sin crear una copia o instancia adicional para las modificaciones, es decir, que se altera la estructura o contenido original.
2..INMUTABILIDAD: aplicado al contexto de los métodos inmutables, es cuando no se modifica el arreglo u objeto original de forma directa, sino que se crea una copia o instancia en donde se realizan las modificaciones, es decir, no se altera la estructura o contenido original. 

-----------------------
1. PROGRAMACIÓN IMPERATIVA: es un paradigma de programación que se basa en dar instrucciones específicas y detalladas al ordenador para que realice una tarea. En este enfoque, 
el programador describe paso a paso cómo se debe llevar a cabo una operación, utilizando estructuras de control, tales como bucles y condicionales para manipular el estado del programa.
2. PROGRAMACIÓN DECLARATIVA: es un paradigma de programación que se centra en describir qué se quiere lograr sin especificar cómo hacerlo. En este enfoque, 
el programador define el resultado deseado y las relaciones entre los datos, dejando que el sistema determine la mejor manera de alcanzar ese resultado.

-----------------------
FUNCIONES DECLARATIVAS: son funciones que se definen utilizando la sintaxis de flecha (=>), se caracterizan por ser más concisas,
por omitir la palabra clave "function" y una función flecha debe ser invocada después de su definición.

-----------------------

Efectos Secundarios (Side Effects): son cambios en el estado del sistema o cualquier interacción que sucede con el entorno exterior donde se ejecuta una función,
además de devolver un valor. Estos cambios pueden incluir la modificación de variables globales, la escritura en archivos o la interacción con bases de datos.

-----------------------

Conceptos de Búsqueda: Defina el funcionamiento de find(), findIndex() e includes().

find(): busca y devuelve el primer elemento de un arreglo que cumple con una condición dada. Si no se encuentra ningún elemento que cumpla con la condición, devuelve undefined.
findIndex(): busca y devuelve el índice del primer elemento de un arreglo que cumple con una condición dada. Si no se encuentra ningún elemento que cumpla con la condición, devuelve -1.
includes(): verifica si un arreglo contiene un elemento específico y devuelve true si lo encuentra, o false si no lo encuentra.

-----------------------
Iteración vs Transformación: 
Iteración: es el proceso de recorrer cada elemento de un arreglo o colección para realizar una operación o acción específica en cada uno de ellos, sin modificar el arreglo original.
Transformación: es el proceso de crear un nuevo arreglo o colección a partir de un arreglo existente, aplicando una función o operación a cada elemento del arreglo original, 
lo que resulta en un nuevo conjunto de datos con una estructura o contenido diferente.

-----------------------

*/
/*Métodos mutables: los que me modifican el arreglo original, cambian la estructura*/
/* Pop, push, splice, reverse, shift, unshift, sort, join, split */

/*Métodos no mutables: hacen una copia del arreglo original y trabajan sobre la copia */
/* map, foreEach, some, slice, reduce, every, some, filter, find, concat */

/*EJERCICIO 1: Gestión de pilas (mutable)*/
let herramientas = ['Martillo', 'Destornillador'];
herramientas.push("Taladro");
herramientas.unshift("Sierra");
herramientas.pop();
console.log(herramientas)

/*EJERCICIO 2: Modificación de Índice (Mutable)*/
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
colores.splice(1,0, "Naranja");
colores.splice(3, 1, "Morado");
console.log(colores);