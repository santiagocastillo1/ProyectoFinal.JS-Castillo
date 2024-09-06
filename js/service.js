const btnSearch = document.querySelector("#btnSearch"),
inputIngreso = document.querySelector("#ingreso"),
contenedor = document.querySelector("#contenedor");

const servicios = [
    { id: 1, nombre: "piña simetrica", precio:1000, img:"piña.png"},
    { id: 2, nombre: "lupa", precio:1000, img:"lupa.png"},
    { id: 3, nombre: "cuadro", precio:1000, img:"cuadro.png"},
    { id: 4, nombre: "instagram", precio:1000, img:"instagram.png"},
    { id: 5, nombre: "twitter", precio:1000, img:"twitter.png"},
    { id: 6, nombre: "bancario", precio:1000, img:"bancario.png"},
    { id: 7, nombre: "playa ", precio:1000, img:"playa.png"},
];

function buscarServicio(arr, filtro) {
    const encontrado = arr.find(el => el.nombre.includes(filtro));
    return encontrado;
  }
  
  function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter(el => el.nombre.includes(filtro));
    return filtrado;
  }
  
  function crearHtml(arr) {
    
  }