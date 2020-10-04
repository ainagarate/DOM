let operacion = window.prompt("Elige una operación entre: suma, resta, multiplicación, división o resto");
let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));



function ejecutarFuncion (){
if (operacion === "suma") {

    window.alert(num1 + num2);
} else if (operacion === "resta") {

    window.alert(num1 - num2);
} else if (operacion === "multiplicacion") {

    window.alert(num1 * num2);


}else if(operacion==="division"){

    window.alert(num1/num2);
}else{

window.alert(num1%num2)
};
};




document.getElementById("div1").innerHTML=`<input type="button" value=${operacion} onclick="ejecutarFuncion()">`

