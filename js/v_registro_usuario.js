$(document).ready(function() {
//HACER UN DOCUMENTO JQUERY PARA CADA PAGINA.

// Agregar método de validación para RUT chileno

    $.validator.addMethod("rutChileno", function(value, element) {
    // Validar que el RUT tenga el formato correcto (8 o 9 dígitos + guión + dígito verificador)
    var rutPattern = /^\d{7,8}-[\dkK]$/;
    if (!rutPattern.test(value)) {
        return false;
    }
    // Validar el dígito verificador
    var rutSinGuion = value.replace("-", "");
    var rut = rutSinGuion.slice(0, -1);
    var dv = rutSinGuion.slice(-1).toUpperCase(); // Convertir a mayúscula para comparar con "K"
    var factor = 2;
    var sum = 0;

    for (var i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut.charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
    }
    var dvCalculado = 11 - (sum % 11);

    if (dvCalculado === 11) {
        dvCalculado = "0";
    } else if (dvCalculado === 10) {
        dvCalculado = "K";
    } else {
        dvCalculado = dvCalculado.toString();
    }
    return dv === dvCalculado;
    }, "El RUT no es válido (escriba sin puntos y con guión)");

    // El siguiente Javascript obliga a que la caja de texto del rut, siempre escriba la letra "K" en mayúscula
    document.getElementById('rut').addEventListener('keyup', function(e) {
    e.target.value = e.target.value.toUpperCase();
    });

    // Agregar método de validación para correo
    $.validator.addMethod("emailCompleto", function(value, element) {

    // Expresión regular para validar correo electrónico
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

    // Validar correo electrónico con la expresión regular
    return regex.test(value);

    }, 'El formato del correo no es válido');
    
    // Agregar método de validación para que un campo sólo acepte 
    // letras y espacios en blanco, pero no números ni símbolos,
    // ideal para campos como nombres y apellidos
    $.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[A-Z\a-zs]*$/.test(value);

    }, "Sólo se permiten letras y espacios en blanco.");

    
$("#formulario-registro").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      nombres: {
        required: true,
        soloLetras: true
      },
      apellidos: {
        required: true,
        soloLetras: true
      },
      correo: {
        required: true,
        emailCompleto: true,
      },
      direccion: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
        maxlength: 15,
      },
      password2: {
        required: true,
        minlength: 5,
        maxlength: 15,
        equalTo: "#password",
      }
    }, // --> Fin de reglas
      messages: {
        rut: {
          required: "El RUT es un campo requerido",
          rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
        },
        nombres: {
          required: "El nombre es un campo requerido",
          soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
        },
        apellidos: {
          required: "Apellidos es un campo requerido",
          soloLetras: "Los apellidos sólo pueden contener letras y espacios en blanco",
        },
        
        correo: {
          required: "El correo es un campo requerido",
          email: "El formato del correo no es válido",
        },
        direccion: {
          required: "La dirección es un campo requerido",
        },
        password: {
          required: "La contraseña es un campo requerido",
          minlength: "La contraseña debe tener un mínimo de 5 caracteres",
          maxlength: "La contraseña debe tener un máximo de 15 caracteres",
        },
        password2: {
          required: "Repetir contraseña es un campo requerido",
          minlength: "Repetir contraseña debe tener un mínimo de 5 caracteres",
          maxlength: "Repetir contraseña debe tener un máximo de 15 caracteres",
          equalTo: "Debe repetir la contraseña escrita anteriormente",
        },
    }, // --> Fin de mensajes
  });
  
});
