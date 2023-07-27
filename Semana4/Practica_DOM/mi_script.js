document.addEventListener('DOMContentLoaded', function () {
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    const element = document.body;
    const nodes = element.getElementsByTagName("a");
    let numb = nodes.length;
    let count = 0;
    for (let i = 0; i < nodes.length - 1; i++) {
       if (nodes[i].href == "http://prueba/") {
        count++
       }
    }

    const par = element.getElementsByTagName("p");
    let enl = par[2].getElementsByTagName("a").length;
    

    document.getElementById("info").innerHTML = "El numero de enlaces en la pagina es: " + numb 
   // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    +  " La direccion del penultimo enlace es:  " + nodes[numb - 2].href
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    + " El numero de enlaces que apuntan a http://prueba/ son: " + count
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    + " El numero de enlaces del tercer parrafo son: " + enl;
});