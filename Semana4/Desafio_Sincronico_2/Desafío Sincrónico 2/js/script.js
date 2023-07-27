const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
function showData() {
  const container = document.getElementById("container");
  for(const persona of DATA){
    const parrafo = document.createElement("p");
    parrafo.innerText = persona.name + " " + persona.lastname;
    container.appendChild(parrafo);
  }
}

document.addEventListener("DOMContentLoaded", showData);
//
