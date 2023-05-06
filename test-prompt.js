const prompt = require("prompt-sync")();
const alumno = {
  nombre,
  apellido,
  departamento,
  evaluacionFP,
  evaluacionPI,
  evaluacionPOO,
  evidenciaFP,
  evidenciaPI,
  evidenciaPOO,
  puntajeIngles,
  leccionesCT,
  pruebaFinal
};

function aprobadoIngles(alumno) {
  return alumno.puntajeIngles >= 50;
}

function puntajeTecnico(alumno) {
  let porcientoFP = (30 * alumno.evaluacionFP) / 100;
  let porcientoPI = (50 * alumno.evaluacionPI) / 100;
  let porcientoPOO = (20 * alumno.evaluacionPOO) / 100;
  return porcientoFP + porcientoPI + porcientoPOO;
}

function evidenciasEntregadas(alumno) {
  return alumno.evidenciaFP && alumno.evidenciaPI && alumno.evaluacionPOO;
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
  if (aprobado) {
    return "Hola " + alumno.nombre + " " + alumno.apellido + ", el detalle de tu status final es: \n"
      + "En ingles - " + alumno.puntajeIngles + "\n" + "En CT - 100 \n" + "En Tecnica- "
      + puntajeTecnico(alumno)
      + "\n" + "Evidencias Entregadas 3 \n" + "En conclusion tu status final es Aprobado con "
      + puntajeTecnico(alumno)
  } else {
    return "Lo siento pero reprobaste la Fase 1"
  }
}

//console.log(estatusFinal(alumno));

var c = prompt("Hola");
console.log(c);

