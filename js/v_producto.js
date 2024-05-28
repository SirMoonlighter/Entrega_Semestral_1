$(document).ready(function() {

    $.validator.addMethod("validCategory", function(value, element) {
        return value !== "Selecciona la categoría";
      }, "Por favor, selecciona una categoría válida.");
    
      $.validator.addMethod("validNombre", function(value, element) {
        return value !== "Selecciona un producto";
      }, "Por favor, selecciona un producto válido.");
    
      $.validator.addMethod("validUsuario", function(value, element) {
        return value !== "";
      }, "Por favor, selecciona una categoría válida.");



    $("#formulario-producto").validate({
        rules: {
            id_prod: {
                required: true,
                minlength: 5,
                maxlength: 15,
            },
            nombre_prod: {
                required: true,
            },
            descripcion_prod: {
                required: true,
            },
            precio_prod: {
                required: true,
                number:true,
                min:1,
            },
            categoria: {
                required: true,
                validCategory: true,
            },
            cantidad: {
                required: true,
                number:true,
            },
            nombre_prod_bodega: {
                required: true,
                validNombre: true,
            },
            descuento_subs: {
                required: true,
                number:true,
                min:0,
                max:100,
              },
              descuento_oferta: {
                required: true,
                number:true,
                min:0,
                max:100,
              },
        }, // --> Fin de reglas
        messages: {
            id_prod: {
                required: "Producto debe tener ID",
             },
            nombre_prod: {
                required: "Producto debe teber nombre",
            },
            descripcion_prod: {
                required: "Producto debe tener Descripción",
            },
            precio_prod: {
                required: "Producto debe tener Precio, no deben ser valores negativos.",
            },
            categoria: {
                required: "Por favor elija una categoría.",
            },
            cantidad: {
                required: "Por favor indique cantidad, no deben ser valores negativos.",
            },
            nombre_prod_bodega: {
                required: "Por favor seleccione un producto",
            },
            descuento_subs: {
                required:"Por favor, ingrese un valor",
              },
            descuento_oferta: {
                required:"Por favor, ingrese un valor",
            }
            }, // --> Fin de mensajes
        });
        
      });