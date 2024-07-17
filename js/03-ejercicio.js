/*
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
*/

let resul = "";
let cadena;

while (true) {
  cadena = prompt("Introduce una cadena de texto ,al pulsar cancelar se terminara y se concatenara:");
  if (cadena === null) {  // 
    break;
  }
  if (resul !== "") {
    resul += "-";
  }
  resul += cadena;
}

alert(resul);
