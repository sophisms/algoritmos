//Formas de declarar arreglos

const numeros = [1,2,3,4,5];
console.log(numeros);

const misNumeros = new Array(16,17,18,19);
console.log(misNumeros);

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

console.log (colores);

////////////////////////////////////
//Arreglos combinados

const combinado = ['Hola', 34, true, null, undefined, {Nombre: 'Guillermo', Apellido: 'Chang'}, new Date];

console.log(combinado);

//Variables

let valor;
valor = numeros.length
console.log(valor);
 
//¡Como saber si es arreglo o no?

valor = Array.isArray(misNumeros);
console.log(valor);

//////////////////////////////////////////

//Obtener valor del arreglo

valor = colores[2];
console.log(valor);

//Insertar valor a un arreglo

colores [2] = 'Morado';
console.log(colores);

//Conocer la posición de un elemento del arreglo

valor = colores.indexOf('Morado');
console.log(valor);

//Añadir y eliminar valores a un arreglo

// Al final
colores.push('Magenta');
console.log(colores);

//Al inicio
colores.unshift('Cerulio');
console.log(colores);

//Eliminar último elemento
colores.pop();
console.log(colores);

//Eliminar primer elemento
colores.shift();
console.log(colores);

//Extraer conjunto de valores de un arreglo

numeros.splice(1,3);
console.log(numeros)

////////////////////////////////////////////////////

//Concatenar arreglos

valores = misNumeros.concat(numeros);
console.log(valores);

//Ordenar arreglo

valor = colores.sort();
console.log(valor);

valor = valores.sort();
console.log(valores);

//Orden personalizado
//Descendente
valor = valores.sort(function(x,y){
return x-y

});
console.log(valor);

//Ascendente
valor = valores.sort(function(x,y){
  return y-x
  
  });
  console.log(valor);