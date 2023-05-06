const prompt = require("prompt-sync")();
alumno = {
  nombre: "Juan",
  apellido: "Gomez",
  departamento: "Montevideo",
  evaluacionFP: 85,
  evaluacionPI: 90,
  evaluacionPOO: 96,
  evidenciaFP: true,
  evidenciaPI: true,
  evidenciaPOO: true,
  puntajeIngles: 80,
  leccionesCT: true,
  pruebaFinal: 65
};

function aprobadoIngles(alumno) {
  return alumno.puntajeIngles >= 50;
}

function competenciasTransversales(alumno){
  if(alumno.leccionesCT){
    return 100
  }else{
    return "No completadas"
  }
}

function puntajeTecnico(alumno) {
  let porcientoFP = (0.3 * alumno.evaluacionFP);
  let porcientoPI = (0.5 * alumno.evaluacionPI);
  let porcientoPOO = (0.2 * alumno.evaluacionPOO);
  return porcientoFP + porcientoPI + porcientoPOO;
}

function evidenciasEntregadas(alumno) {
  return alumno.evidenciaFP && alumno.evidenciaPI && alumno.evaluacionPOO;
}

function cantidadEvidenciasEntregadas(alumno){
  if(evidenciasEntregadas(alumno)){
    return 3
  }else {
    return "Falto evidencia por entregar"
  }
}

function aprobadoTecnica(alumno) {
  return (puntajeTecnico(alumno) >= 60 && evidenciasEntregadas(alumno)) ||
    (puntajeTecnico(alumno) >= 60 && !evidenciasEntregadas(alumno) && alumno.pruebaFinal >= 60) ||
    ((puntajeTecnico(alumno) >= 50 && puntajeTecnico(alumno) <= 59, 99) && evidenciasEntregadas(alumno)
      && alumno.pruebaFinal >= 60);
}

function aprobado(alumno) {
  return aprobadoIngles(alumno) && alumno.leccionesCT && aprobadoTecnica(alumno);
}

function estatusFinal(alumno) {
  if (aprobado(alumno)) {
    return "Hola " + alumno.nombre + " " + alumno.apellido + ", el detalle de tu status final es: \n"
      + "En ingles - " + alumno.puntajeIngles + " OK \n" + "En CT - " + competenciasTransversales(alumno) + " OK \n" + "En Tecnica - "
      + puntajeTecnico(alumno) + " OK \n" 
      + "Evidencias Entregadas- " + cantidadEvidenciasEntregadas(alumno) + " OK \n" 
      + "En conclusion tu status final es Aprobado con " + puntajeTecnico(alumno)
  } else {
    return "Hola " + alumno.nombre + " " + alumno.apellido + ", el detalle de tu status final es: \n"
    + "En ingles - " + alumno.puntajeIngles + "\n" + "En CT - " + competenciasTransversales(alumno) + "\n" + "En Tecnica - "
    + puntajeTecnico(alumno) + "\n" 
    + "Evidencias Entregadas- " + cantidadEvidenciasEntregadas(alumno) + "\n" 
    + "En conclusion tu status final es Reprobado con " + puntajeTecnico(alumno) + "\n"
  }
}

console.log(estatusFinal(alumno));

