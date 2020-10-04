let nombre= window.prompt("¿Cual es tu nombre?");
let edad = window.prompt("Edad");
let div1= document.getElementById("div1");




if (edad<18) {
    document.getElementById("div1").style.color="red";
    div1.innerHTML= `<p>Hola ${nombre} eres menor de edad</p>`;
   
} else {
    document.getElementById("div1").style.color="green";

    div1.innerHTML= `<p>Hola ${nombre} eres mayor de edad</p>`;
}

