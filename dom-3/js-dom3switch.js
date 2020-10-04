let nombre= window.prompt("¿Cual es tu nombre?");
let edad = window.prompt("Edad");
let div1= document.getElementById("div1");


switch(edad){

    case "0-17":  div1.innerHTML= 
    `
    <p>Hola ${nombre} eres menor de edad</p>`; break;
   
    case "18-80":  div1.innerHTML= 
    `
    <p>Hola ${nombre} eres mayor de edad</p>`; break;
    
}