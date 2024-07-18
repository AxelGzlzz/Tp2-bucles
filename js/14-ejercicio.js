/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

  while(true){
    const cadena = prompt("Introduce una cadena de texto:");
    if (cadena === null) {   
        break;
      }

    let cadenaConGuiones = "";
    
    
    for (let i = 0; i < cadena.length; i++) {
      cadenaConGuiones += cadena[i];
      
      if (i < cadena.length - 1) {
        cadenaConGuiones += "-";
      }
    }
    
    console.log("La cadena con guiones es: " + cadenaConGuiones);
    alert("La cadena con guiones es: " + cadenaConGuiones);
    

  }

   



