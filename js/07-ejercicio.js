/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let num = parseInt(prompt("Introduce un número (no mayor de 50):"));
let inver = "";

if (isNaN(num) || num < 1 || num > 50) {
  console.log("Por favor, introduce un número válido entre 1 y 50.");
  alert("Por favor, introduce un número válido entre 1 y 50.");
} else {
 

  for (let i = num; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      inver += i;
    }

    inver += "<br>";
  }

  console.log(inver);
  document.write(inver);
}
