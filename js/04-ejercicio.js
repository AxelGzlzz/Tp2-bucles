/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.
*/


let suma = 0;

while (true) {
    let input = prompt("Introduce un número o pulse cancelar para salir :");

    if (input === null) {
        break; 
    }

    let numero = parseFloat(input);

   
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
    } else {
        suma += numero; 
    }
}

alert("La suma total de los números introducidos es: " + suma);
