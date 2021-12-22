/* ARREGLOS
- Son matrices, no listas tipo Python
*/
const numeros = [1,2,3,4,5];
console.log(numeros);
const misNumeros = new Array(16,17,18,19);
console.log(misNumeros);
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
console.log(colores);

/*ARREGLOS COMBINADOS*/
const combinado = ['Hola', 34, true, null, undefined,{Nombre: 'Sofía', Apellido: 'Aguilar'}, new Date]; //El espacio 5 de memoria es un objeto con llaves
console.log(combinado);

/*INSTRUCCIONES*/ 
//Para saber la longitud del arreglo
console.log(combinado.length);

//Para saber si es arreglo
valor = Array.isArray(combinado);
console.log(valor);

//Obtener valor del arreglo a través del índice
index = colores[1];
console.log(index);

//Sustituir valor a un arreglo
colores[2] = 'Morado';
console.log(colores);

//Conocer la posición de un arreglo
loc = colores.indexOf('Morado');
console.log(loc);

//Añadir valores al final
colores.push('Magenta');
console.log(colores);

//Añadir valores al inicio 
colores.unshift('Cerulio');
console.log(colores);

//Eliminar último elemento
colores.pop();
console.log(colores);

//Eliminar primer elemento
colores.shift();
console.log(colores);

//Extraer un conjunto de valores de un arreglo
numeros.splice(1,3);
console.log(numeros);

//Concatenar arreglos
concatenado = misNumeros.concat(numeros);
console.log(concatenado);

//Ordenar arreglos
ord1 = colores.sort();
console.log(ord1); //ordena alfabéticamente

/*Descendente
- Es necesario especificarle a javascript que los datos son "numbers"
*/

random = [5,4,2,9,10,58];

//Descendente
ord1 = random.sort(function(x,y){
    return x-y
    
});
console.log(ord1);
    
//Ascendente
ord2 = random.sort(function(x,y){
    return y-x
});
console.log(ord2);