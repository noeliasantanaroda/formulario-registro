function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const terminos = document.getElementById('terminos').checked;
  
    // Validar que ningún campo esté vacío
    if (!nombre || !apellido || !email || !password1 || !password2) {
      showAlertError();
      return;
    }
  
    // Validar que la contraseña tenga al menos 6 caracteres
    if (password1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
      showAlertError();
      return;
    }
  
    // Validar que las contraseñas sean iguales
    if (password1 !== password2) {
        alert("tu contraseña no coincide");
      showAlertError();
      return;
    }
  
    // Validar que se haya aceptado los términos y condiciones
    if (!terminos) {
      showAlertError();
      return;
    }
  
    // Si todas las validaciones pasan, mostrar éxito
    showAlertSuccess();
  });
  
  function showAlertSuccess() {
    const alertSuccess = document.getElementById('alert-success');
    alertSuccess.classList.add('show');
    alertSuccess.classList.remove('fade');
  }
  
  function showAlertError() {
    const alertDanger = document.getElementById('alert-danger');
    alertDanger.classList.add('show');
    alertDanger.classList.remove('fade');
  }
  
