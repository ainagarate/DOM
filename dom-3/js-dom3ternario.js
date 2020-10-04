let nombre= window.prompt("¿Cual es tu nombre?");
let edad = parseInt(window.prompt("Edad"));
let div1= document.getElementById("div1");


edad<18? div1.innerHTML= `<p>Hola ${nombre} eres menor de edad</p>` : div1.innerHTML= `<p>Hola ${nombre} eres mayor de edad</p>`