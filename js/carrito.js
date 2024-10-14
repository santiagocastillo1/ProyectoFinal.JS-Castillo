const btnSwal = document.getElementById("btnSwal"),
  btnSwal1 = document.getElementById("btnSwal1"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual"),
  fechaActual = document.querySelector(".fecha-actual");

const showAlert = () => {
  Swal.fire({
    position: "middle",
    icon: "success",
    title: "Agregaste este producto al carrito.",
    showConfirmButton: false,
    timer: 1500,
  });
};

btnSwal.addEventListener("click", showAlert);
btnSwal1.addEventListener("click", showAlert);

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
