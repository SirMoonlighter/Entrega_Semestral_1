$(document).ready(function() {

    // Agregar método de validación para correo
  $.validator.addMethod("emailCompleto", function(value, element) {

    // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

    // Validar correo electrónico con la expresión regular
    return regex.test(value);

  }, 'El formato del correo no es válido');

  $("#login").validate({
    rules: {
        correo: {
            required: true,
            emailCompleto: true,
          },
          password: {
            required: true,
          },
    }, //--> Fin reglas
    messages: {
        correo: {
            required: "El correo es un campo requerido",
            email: "El formato del correo no es válido",
          },
        password: {
        required: "La contraseña es un campo requerido",
        },
    }, // --> Fin de mensajes
});

});