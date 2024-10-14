// const fetchinServices = async (url) => {
//   const response = await fetch(url);
//   const services = await response.json();
// };

const carrito = [];

const productos = [
  { id: 1, nombre: "Piña simetrica", precio: 1000 },
  { id: 2, nombre: "Piña simetrica", precio: 1000 },
];

const btnSwal = document.getElementById("btnSwal"),
  btnSwal1 = document.getElementById("btnSwal1"),
  mostrarCarritoBtn = document.getElementById("mostrarCarrito"),
  vaciarCarritoBtn = document.getElementById("vaciarCarrito");

function agregarProducto(idProducto) {
  const producto = productos.find((prod) => prod.id === idProducto);
  if (producto) {
    carrito.push(producto);

    Toastify({
      text: `${producto.nombre} agregado al carrito`,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "green",
      },
    }).showToast();
  }
}

btnSwal.addEventListener("click", function () {
  agregarProducto(1);
});

btnSwal1.addEventListener("click", function () {
  agregarProducto(2);
});

mostrarCarritoBtn.addEventListener("click", function () {
  if (carrito.length === 0) {
    Swal.fire({
      title: "El carrito está vacío",
      icon: "info",
      timer: 1500,
    });
  } else {
    const productosEnCarrito = carrito
      .map((prod) => `${prod.nombre} - $${prod.precio}`)
      .join("<br>");

    Swal.fire({
      title: "Carrito de Compras",
      html: productosEnCarrito,
      icon: "success",
      showConfirmButton: true,
    });
  }
});

vaciarCarritoBtn.addEventListener("click", function () {
  carrito.length = 0;

  Swal.fire({
    title: "Carrito vaciado",
    icon: "success",
    timer: 1500,
  });
});
