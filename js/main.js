const btnSwal = document.getElementById("botonSwal"),
btnToast = document.getElementById("botonToast"),
horaActual = document.querySelector("#horaActual"),
fechaActual = document.querySelector (".fecha-actual");



const inputs = document.querySelectorAll("input")

const producto = {

    nombre: "Papas",
    precio: 230,
  
  };
  
  let concatenado =
  
    "Producto: " + producto.nombre + ", precio: $" + producto.precio;
  
    let template= `PRODUCTO: ${producto.nombre}, 
  
    PRECIO: $ ${producto.precio}`;//interpolacion
  
  // contenedor.innerText = concatenado;
  
  principl.innerText = template;