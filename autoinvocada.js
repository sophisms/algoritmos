// Ejemplo 6: Función autoinvocada o invocada inmediatamente
(function(){
    console.log("Sofía Aguilar");
})();

(function(apellido){
    console.log("Sofía "+apellido);
})("Aguilar");

/*
1. No necesita ser nombrada
2. Ocurre inmediatamente
3. Ocurre SOLO donde se crea

NOTA:
Investigar "funciones flecha"
*/