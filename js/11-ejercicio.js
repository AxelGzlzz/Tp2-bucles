/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
*/



    const edad = parseInt(prompt("ingrese la primer edad" ));
    const nombre = prompt("ingrese primer  ape y nombre");
    const edad2 = parseInt(prompt("ingrese segunda  edad" ));
    const nombre2 = prompt("ingrese segundo  ape y nombre");
    const edad3 = parseInt(prompt("ingrese la tercer edad" ));
    const nombre3 = prompt("ingrese el tercer  ape y nombre");



     if(edad>=1 && edad<=100 || edad2>=1 && edad2<=100 || edad3>=1 && edad3<=100){

        if(edad>edad2 && edad>edad3){


            alert("la persona mayor es : "+nombre+" con "+edad);
       
           }else if(edad2>edad && edad2>edad3){
       
               alert("la persona mayor es : "+nombre2+" con "+edad2);
       
       
           }else if(edad3>edad && edad3>edad2){
       
       
               alert("la persona mayor es : "+nombre3+" con "+edad3);
       
       
           }




     }else{


        alert("una edad ingresada es invalida");


     }

  
