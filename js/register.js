const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", async () => {
  const { value: email } = await Swal.fire({
    title: "Input email address",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address",
  });

  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
  const { value: password } = await Swal.fire({
    title: "Enter your password",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Enter your password",
    inputAttributes: {
      maxlength: "10",
      autocapitalize: "off",
      autocorrect: "off",
    },
  });
  if (password) {
    Swal.fire(`Entered password: ${password}`);
  }
});
