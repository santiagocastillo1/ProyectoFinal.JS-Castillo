//fetch
const inputSearch = document.querySelector("#buscar");

fetch("./data/servicios.json")
  .then((response) => response.json())
  .then((servicio) => {
    console.log(servicio);
  });
