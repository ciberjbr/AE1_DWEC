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
        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)


        createElementAndAppend(form, "label", "Nombre:");
        createElementAndAppend(form, "input");
        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)


        createElementAndAppend(form, "label", "Apellidos:");
        createElementAndAppend(form, "input");
        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)


        createElementAndAppend(form, "label", "Dirección:");
        createElementAndAppend(form, "input");
        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)


        createElementAndAppend(form, "label", "Teléfono:");
        createElementAndAppend(form, "input");
        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)


        // Radio buttons Estado civil
        // falta 1 radio button en caso que guste lo añado 
        var estadosCivil = document.createElement("label");
        estadosCivil.className="estado";
        var txtestado = document.createTextNode("Estado Civil:");
        estadosCivil.appendChild(txtestado);
        form.appendChild(estadosCivil);

        var br = document.createElement("br");
        form.appendChild(br);


        //casado
        var inputest1 = document.createElement("input")
        inputest1.type = "radio";
        inputest1.id= "casado";
        inputest1.name = "estado";
        inputest1.value= "casado";

        var txtinputest1 = document.createTextNode("casado");
        inputest1.appendChild(txtinputest1);
        form.appendChild(inputest1);

        var labelest1 = document.createElement("label");
        var txtlabelest1 = document.createTextNode("casado");
        labelest1.appendChild(txtlabelest1);
        form.appendChild(labelest1);

        var br = document.createElement("br");
        form.appendChild(br);

        //divorciado
        var inputest2 = document.createElement("input")
        inputest2.type = "radio";
        inputest2.id= "divorciado";
        inputest2.name = "estado";
        inputest2.value= "divorciado";

        var txtinputest2 = document.createTextNode("divorciado");
        inputest2.appendChild(txtinputest2);
        form.appendChild(inputest2);

        var labelest2 = document.createElement("label");
        var txtlabelest2 = document.createTextNode("divorciado");
        labelest2.appendChild(txtlabelest2);
        form.appendChild(labelest2);

        var br = document.createElement("br");
        form.appendChild(br);


         //soltero
         var inputest3 = document.createElement("input")
         inputest3.type = "radio";
         inputest3.id= "sotero";
         inputest3.name = "estado";
         inputest3.value= "soltero";
 
         var txtinputest3 = document.createTextNode("soltero");
         inputest3.appendChild(txtinputest3);
         form.appendChild(inputest3);
 
         var labelest3 = document.createElement("label");
         var txtlabelest3 = document.createTextNode("soltero");
         labelest3.appendChild(txtlabelest3);
         form.appendChild(labelest3);
 
         var br = document.createElement("br");
         form.appendChild(br);
        
         //Buscando pareja
         var inputest4 = document.createElement("input")
         inputest4.type = "radio";
         inputest4.id= "En busqueda de media naranja";
         inputest4.name = "estado";
         inputest4.value= "En busqueda de media naranja";
 
         var txtinputest4 = document.createTextNode("En busqueda de media naranja");
         inputest4.appendChild(txtinputest4);
         form.appendChild(inputest4);
 
         var labelest4 = document.createElement("label");
         var txtlabelest4 = document.createTextNode("En busqueda de media naranja");
         labelest4.appendChild(txtlabelest4);
         form.appendChild(labelest4);
 
         var br = document.createElement("br");
         form.appendChild(br);
 
 

 

        var br = document.createElement("br")
        form.appendChild(br)
        var br = document.createElement("br")
        form.appendChild(br)




        // Checkboxes

        var intereses = document.createElement("label");
        intereses.className="gustos";

        var contenidoCheckboxes = document.createTextNode("Cuales son sus intereses:");
        intereses.appendChild(contenidoCheckboxes);
        form.appendChild(intereses);

        var br = document.createElement("br");
        form.appendChild(br);
        // Deportes

        var checkbox1 = document.createElement("input");
        checkbox1.type = "checkbox";
        checkbox1.id = "Deportes";
        checkbox1.name = "gustos";
        checkbox1.value = "si";
    
        form.appendChild(checkbox1);
        var labelcheckbox1 = document.createElement("label");
        var txtlabelcheckbox1 = document.createTextNode("Deportes");
        labelcheckbox1.appendChild(txtlabelcheckbox1)
        form.appendChild(labelcheckbox1);

        var br = document.createElement("br");
        form.appendChild(br);

        // Musica

        var checkbox2 = document.createElement("input");
        checkbox2.type = "checkbox";
        checkbox2.id = "Música";
        checkbox2.name = "gustos";
        checkbox2.value = "si";
    
        form.appendChild(checkbox2);
        var labelcheckbox2 = document.createElement("label");
        var txtlabelcheckbox2 = document.createTextNode("Música");
        labelcheckbox2.appendChild(txtlabelcheckbox2);
        form.appendChild(labelcheckbox2);

        var br = document.createElement("br");
        form.appendChild(br);

         // Viajes

         var checkbox3 = document.createElement("input");
         checkbox3.type = "checkbox";
         checkbox3.id = "Viajes";
         checkbox3.name = "gustos";
         checkbox3.value = "si";
     
         form.appendChild(checkbox3);
         var labelcheckbox3 = document.createElement("label");
         var txtlabelcheckbox3 = document.createTextNode("Viajes");
         labelcheckbox3.appendChild(txtlabelcheckbox3);
         form.appendChild(labelcheckbox3);
 
         var br = document.createElement("br");
         form.appendChild(br);

         // Tecnología

         var checkbox4 = document.createElement("input");
         checkbox4.type = "checkbox";
         checkbox4.id = "Tecnología";
         checkbox4.name = "gustos";
         checkbox4.value = "si";
         
         
         form.appendChild(checkbox4);
         var labelcheckbox4 = document.createElement("label");
         var txtlabelcheckbox4= document.createTextNode("Tecnología");
         labelcheckbox4.appendChild(txtlabelcheckbox4);
         form.appendChild(labelcheckbox4);
 
         var br = document.createElement("br");
         form.appendChild(br);
         
         //Naturaleza

         var checkbox5 = document.createElement("input");
         checkbox5.type = "checkbox";
         checkbox5.id = "Naturaleza";
         checkbox5.name = "gustos";
         checkbox5.value = "si";
     
         
         form.appendChild(checkbox5);
         var labelcheckbox5 = document.createElement("label");
         var txtlabelcheckbox5= document.createTextNode("Naturaleza");
         labelcheckbox5.appendChild(txtlabelcheckbox5);
         form.appendChild(labelcheckbox5);
 
         var br = document.createElement("br");
         form.appendChild(br);
         var br = document.createElement("br");
         form.appendChild(br);

 
 /*

        // Imágenes
        createElementAndAppend(form, "label", "Algunos de nuestros candidatos:");
        var br = document.createElement("br");
        form.appendChild(br);

        var imagencand2 = document.createElement("img");
        imagencand2.src = "images/cand2.jpg" ;
        imagencand2.width= "500px";
        form.appendChild(imagencand2);

        var br = document.createElement("br");
         form.appendChild(br);*/
    
    
         

         


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