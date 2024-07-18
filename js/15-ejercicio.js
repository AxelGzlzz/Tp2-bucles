// 15- Realiza un script que cuente el número de vocales que tiene un texto.



const cadena = prompt("Introduce una cadena de texto:");


let numeroVocales = 0;


for (let i = 0; i < cadena.length; i++) {
  let caracter = cadena[i].toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    numeroVocales++;
  }
}


alert("El número de vocales es: " + numeroVocales);
