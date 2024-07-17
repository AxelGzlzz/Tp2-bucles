/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/


document.getElementById("boton").addEventListener("click", function() {
   
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    


    document.getElementById("resultado").innerText = "Número generado: " + numeroAleatorio;});