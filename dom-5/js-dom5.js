let num1= parseInt(window.prompt("Escribe un número"));
let num2= parseInt(window.prompt("Escribe otro número"));


let suma=`

<div class="suma">
 
</div>`;



let operaciones=`

<div >

<p style="background-color:#000000; color:white"> ${num1+num2} </p>
 <p style="background-color:red; color:black "> ${num1-num2} </p>
 <p style="background-color:green; color:blue "> ${num1*num2} </p>
 <p style="background-color:yellow; color:black "> ${num1/num2} </p>
 <p style="background-color:blue; color:white "> ${num1%num2} </p>

</div>`;





document.getElementById("div1").innerHTML=`<p>${operaciones}</p>` ;

