let ligaSantander =
 [{equipo: "Barcelona", puntos: 79},
  {equipo: "Real Madrid", puntos: 68 },
  {equipo: "Atletico de Madrid", puntos: 63},
  {equipo: "Real Sociedad", puntos: 58},
  {equipo: "Villarreal", puntos: 53}]

  
  let equipos = [];
   

  function nombreEquipos(ligaSantander){

   for (let index = 0; index < ligaSantander.length; index++) {
    equipos.push(index.equipo);
    }
 
    return equipos;
  }
  console.log(equipos);

  const prompt = require("prompt-sync")();
  var c = prompt("Hola");
console.log(c);
