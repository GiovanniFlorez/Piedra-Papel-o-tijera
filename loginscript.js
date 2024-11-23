function registrar() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var correo = document.getElementById("correo").value;
    var usuarioExistente = localStorage.getItem(usuario);
  
    if (usuarioExistente) {
      alert("El usuario ya está registrado.");
    } else {
      var datosUsuario = { usuario: usuario, contrasena: contrasena, correo: correo };
      localStorage.setItem(usuario, JSON.stringify(datosUsuario));
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      document.getElementById("formularioLogin").style.display = "block";
      document.getElementById("formularioRegistro").style.display = "none";
    }
  }
  
  function validarLogin() {
    var usuario = document.getElementById("usuarioLogin").value;
    var contrasena = document.getElementById("contrasenaLogin").value;
    
    var usuarioGuardado = localStorage.getItem(usuario);
  
    if (usuarioGuardado) {
      var datosUsuario = JSON.parse(usuarioGuardado);
      if (datosUsuario.contrasena === contrasena) {
        window.location.href = "juego.html";
      } else {
        alert("Contraseña incorrecta.");
      }
    } else {
      alert("Usuario no encontrado.");
    }
  }
  
  function mostrarRegistro() {
    document.getElementById("formularioLogin").style.display = "none";
    document.getElementById("formularioRegistro").style.display = "block";
  }
  
  function mostrarLogin() {
    document.getElementById("formularioRegistro").style.display = "none";
    document.getElementById("formularioLogin").style.display = "block";
  }
  