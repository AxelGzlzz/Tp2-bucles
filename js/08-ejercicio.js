/*
8- Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
*/

const numero = parseInt(prompt("Introduce un numero no mayor de 50:"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  console.log("Por favor, introduce un número válido entre 1 y 50.");
  alert("Por favor, introduce un número válido entre 1 y 50.");
} else {
  let piramide = "";

  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += j;
    }

    piramide += "<br>";
  }

  console.log(piramide);
  document.write(piramide);
}
