document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const loginContainer = document.getElementById('loginContainer');
  
    // Crear y mostrar el formulario de login cuando se presiona el botón
    btnLogin.addEventListener('click', () => {
      displayLoginForm();
    });
  
    function displayLoginForm() {
      loginContainer.innerHTML = `
        <form id="loginForm">
          <h2>Iniciar Sesión</h2>
          <label for="username">Usuario:</label>
          <input type="text" id="username" required>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" required>
          <button type="submit">Ingresar</button>
        </form>
        <p id="loginMessage"></p>
      `;
  
      const loginForm = document.getElementById('loginForm');
      loginForm.addEventListener('submit', handleLogin);
    }
  
    // Función que maneja el login
    function handleLogin(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const loginMessage = document.getElementById('loginMessage');
      
      // Verificar si los datos coinciden con el usuario almacenado
      const storedUser = localStorage.getItem('username');
      const storedPass = localStorage.getItem('password');
      
      // Operador lógico avanzado (nullish coalescing) para evitar fallos por null
      const validUser = storedUser ?? '';
      const validPass = storedPass ?? '';
  
      if (username === validUser && password === validPass) {
        loginMessage.textContent = 'Inicio de sesión exitoso. ¡Bienvenido!';
        loginMessage.style.color = 'green';
        // Aquí puedes redirigir a otra página o permitir el acceso
      } else {
        loginMessage.textContent = 'Usuario o contraseña incorrectos.';
        loginMessage.style.color = 'red';
      }
    }
  
    // Función para registrar un usuario por primera vez (puede ser modificado)
    function registerUser() {
      const newUsername = prompt('Ingresa un nuevo nombre de usuario:');
      const newPassword = prompt('Ingresa una nueva contraseña:');
      
      if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Usuario registrado con éxito.');
      } else {
        alert('Error: Debes ingresar un usuario y una contraseña válidos.');
      }
    }
  
    if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
      registerUser();
    }
  });
  