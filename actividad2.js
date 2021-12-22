//Función que tendrá como parámetros dos valores, sumarlos, restarlos, dividirlos, multiplicarlos y elevar al cuadrado el resto (residuo al cuadrado), para luego dichos parámetros aumentarles 1 y restarles 1 a ambos (mostrar el valor -1 y +1).

/* Al declarar tipos de variables:
let // local en un bloque
var //global
const //constante
*/

function operator(numero1,numero2){
valor1 = numero1 + numero2;
valor2 = numero1 - numero2;
valor3 = numero1 / numero2;
valor4 = numero1 * numero2;
valor5 = numero1 % numero2; // Residuo
sqr = valor5*valor5; // Cuadrado del residuo
aux_numero1 = numero1;
aux_numero2 = numero2;
valor6 = ++numero1; // Suma 1
valor7 = --aux_numero1; // Resta 1
valor8 = ++numero2; // Suma 1
valor9 = --aux_numero2; // Resta 1
console.log("Suma = "+valor1);
console.log("Resta = "+valor2);
console.log("División = "+valor3);
console.log("Multiplicación = "+valor4);
console.log("Cuadrado del residuo = "+sqr);
console.log("Primer valor + 1 = "+valor6);
console.log("Primer valor - 1 = "+valor7);
console.log("Segundo valor + 1 = "+valor8);
console.log("Segundo valor - 1 = "+valor9);
}

//console.log(operator(10,3));

// Revisa esto https://stackoverflow.com/questions/38511344/update-value-not-incrementing-in-javascript


