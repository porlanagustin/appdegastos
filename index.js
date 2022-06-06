let personas = 0;

let arrayPersonas = [];

function cantPersonas() {
   personas = document.getElementById("enviar").value;
   let tabla = document.getElementById("tabla");

   tabla.style.visibility = "visible";
    tabla.innerHTML = "";

   for (let i = 0; i < personas; i++){
        let html= `<div id=\"persona${i + 1}\"><label >Persona&nbsp;${i + 1}</label>&nbsp;<input type=\"number\" id=\"nombrePersona${i + 1}\">&nbsp;</input></div>`;
        tabla.innerHTML += html;
   }

   tabla.innerHTML += "<div id=\"form2\"><button onclick=\"agregarPersonas()\">Calcular</button></div>";

}

function agregarPersonas() {
    let contador = 0;

    for (i = 0; i < personas; i++){
        let persona = document.getElementById(`nombrePersona${i + 1}`).value;
        if (persona > 0){
            contador++;
        }
    }
    
    if(contador != personas){
        window.alert("error, falta definir personas o no es un numero");
        return;
    }

    for (i = 0; i < personas; i++){
        let persona = document.getElementById(`nombrePersona${i + 1}`).value;
        arrayPersonas.push(parseFloat(persona));
    
        document.getElementById(`persona${i + 1}`).style.visibility = "hidden";
    }

    document.getElementById("tabla").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("form2").style.display = "none";
    sumar();
}

function sumar(){
    let sumatotal = 0;
    for (i = 0; i < arrayPersonas.length; i++){
        sumatotal += arrayPersonas[i];
    }
    
    let resultado = (sumatotal / personas);
    
    let cartel = document.getElementById("cartel");
    cartel.innerHTML = `<h1>Cada uno debe poner ${resultado} pesos</h1>`;
    cartel.innerHTML += `<button onclick=\"reload()\">Realizar calculo de nuevo</button>`;
    cartel.style.visibility="visible";
}

function reload(){
    location.reload();
}