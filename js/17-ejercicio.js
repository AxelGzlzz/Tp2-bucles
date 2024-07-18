// Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.
// Ejemplo:
// Input: Hola mundo 
// Output: la vocal ‘o’ está en la posición


  

const texto = prompt('Introduce un texto:');


const vocales = 'aeiouAEIOU';

let posicion = -1;



for (let i = 0; i < texto.length; i++) {
  if (vocales.indexOf(texto[i]) !== -1) {
    posicion = i;
    break;
  }
}


if (posicion !== -1) {
  console.log("La vocal '" + texto[posicion] + "' está en la posición " + (posicion + 1));
  alert("La vocal '" + texto[posicion] + "' está en la posición " + (posicion + 1));
} else {
  console.log("No se encontraron vocales en el texto.");
  alert("No se encontraron vocales en el texto.");
}
