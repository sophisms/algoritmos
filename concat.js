// Ejemplo 3: Concatenar dos string
function persona(nombre, apellido, edad){
    return ("Bienvenido: "+nombre+' '+apellido+' y tu tienes '+edad+' años.');
}
console.log(persona('Sofía','Aguilar',23));
console.log(persona('Guillermo','Chang',34));

// Ejemplo 4: Definiendo los parámetros
// NO es recomendable porque es dependiente de los valores definidos
function datos(nombre='Sofía', apellido='Aguilar'){
    return ("Bienvenido: "+nombre+' '+apellido+'.');
}
console.log(datos());