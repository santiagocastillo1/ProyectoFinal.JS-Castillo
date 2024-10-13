const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", async () => {
  const { value: email } = await Swal.fire({
    title: "Ingresa tu email.",
    input: "email",
    //inputLabel: "Tu codigo email.",
    inputPlaceholder: "Ingrese su email aqui.",
  });

  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
  const { value: password } = await Swal.fire({
    title: "Contraseña",
    input: "password",
    //inputLabel: "Password",
    inputPlaceholder: "Ingrese tu contraseña aqui.",
    inputAttributes: {
      maxlength: "10",
      autocapitalize: "off",
      autocorrect: "off",
    },
  });
  if (password) {
    Swal.fire(`Entered password: ${password}`);
  }
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Registrado Correctamente.",
  });
});
