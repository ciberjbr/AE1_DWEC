var contenido = document.getElementById("Container");
        function GeneraForm(){

           
           // document.body.appendChild("container");// me aparece en los apuntes para poder visualizar los datos 
            // Función para crear elementos y añadirlos al contenedor
        function createElementAndAppend(contenido, elementType, text) {
            var element = document.createElement(elementType);
            if (text) {
                element.textContent = text;
            }
            contenido.appendChild(element);
            return element;
        }
        
        

        // Crear un formulario
        var form = createElementAndAppend(contenido, "form");

        // Campos de texto
        createElementAndAppend(form, "label", "DNI:");
        createElementAndAppend(form, "input");

        createElementAndAppend(form, "label", "Nombre:");
        createElementAndAppend(form, "input");

        createElementAndAppend(form, "label", "Apellidos:");
        createElementAndAppend(form, "input");

        createElementAndAppend(form, "label", "Dirección:");
        createElementAndAppend(form, "input");

        createElementAndAppend(form, "label", "Teléfono:");
        createElementAndAppend(form, "input");

        // Radio buttons
        createElementAndAppend(form, "label", "Estado civil:");

        var radioDiv = createElementAndAppend(form, "div");
        var estadosCiviles = ["Soltero", "Casado", "Divorciado", "Viudo"];

        estadosCiviles.forEach(function (estado) {
            createElementAndAppend(radioDiv, "input", estado);
            createElementAndAppend(radioDiv, "label", estado);
        });

        // Checkboxes
        createElementAndAppend(form, "label", "Intereses:");

        var checkboxDiv = createElementAndAppend(form, "div");
        var intereses = ["Deporte", "Música", "Viajes", "Tecnología", "Cine"];

        intereses.forEach(function (interes) {
            createElementAndAppend(checkboxDiv, "input", interes);
            createElementAndAppend(checkboxDiv, "label", interes);
        });

        // Imágenes
        createElementAndAppend(form, "label", "Imágenes:");

        createElementAndAppend(form, "img");
        createElementAndAppend(form, "img");

        // Campo select
        createElementAndAppend(form, "label", "País de residencia:");

        var select = createElementAndAppend(form, "select");
        var paises = ["España", "Francia", "Alemania", "Italia", "Reino Unido"];

        paises.forEach(function (pais) {
            var option = createElementAndAppend(select, "option", pais);
            option.value = pais;
        });

        // Textarea
        createElementAndAppend(form, "label", "Comentarios:");
        createElementAndAppend(form, "textarea");

        }