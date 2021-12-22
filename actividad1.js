// Actividad: Realizar función que use como parámetros el nombre, el apellido, la edad y entregue los datos y el cuadrado de la edad.
function persona(nombre, apellido, edad){
    sqr = edad*edad
    return ("Bienvenido: "+nombre+' '+apellido+', tienes '+edad+' años y su cuadrado es '+sqr+'.');
}
console.log(persona('Sofía','Aguilar',23));
console.log(persona('Guillermo','Chang',34));