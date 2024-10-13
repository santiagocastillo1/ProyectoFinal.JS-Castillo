const btnSwal = document.getElementById("btnSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

btnSwal.addEventListener("click", function () {
  Swal.fire({
    position: "middle",
    icon: "success",
    title: "Agregaste este producto al carrito.",
    showConfirmButton: false,
    timer: 1500,
  });
});

btnToast.addEventListener("click", function () {
  Toastify({
    text: "Producto agregado con exito.",
    duration: 3000,
    //destination: "",
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "green",
    },
    onClick: function () {},
  }).showToast();
});
