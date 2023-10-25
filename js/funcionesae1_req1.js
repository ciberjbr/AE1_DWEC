        /*
        Requerimiento 1:
        Se quiere generar una página web completamente por JavaScript, modificando el árbol DOM.
        La página web solo tendrá un contenedor (DIV) y sobre dicho contenedor y por medio de JavaScript
        se añadirán elementos a dicho contenedor. La temática de la web se deja libre al alumno.
        No es necesario usar CSS. Se valorará usar funciones propias de modificación del árbol
        DOM y no usar innerHTML.

        Se añadirá al menos los siguientes elementos HTML a un formulario:

        - Campos de texto donde poner el DNI, el nombre y los apellidos, la dirección y el teléfono.
        - Dos radio button, con 4 opciones a elegir
        - Cinco checkbox diferentes
        - 2 imágenes
        - Un campo select
        - Un text area
        */

function crearTitulo(){
        //Crear nodo de tipo Element
        let titulo = document.createElement("h1");//<h1></h1>       
        //Crear nodo de tipo Text
        let contenido = document.createTextNode("Formulario");//Formulario       
        //Añadir el nodo Text como hijo del nodo Element
        titulo.appendChild(contenido);//<h1>Formulario</h1>
        //Añadir el nodo Element como hijo del div cuyo id = "contenedor"
        document.getElementById("contenedor").appendChild(titulo);
}

function crearFormulario(){
        //Crear nodos de tipo Element
        let formulario = document.createElement("form");//<form></form>
        //Añadir un id al elemento fomulario
        formulario.id = "formulario";
        //Añadir el nodo Element como hijo del div cuyo id = "contenedor"
        document.getElementById("contenedor").appendChild(formulario); 
}

function crearInputDatos(){
        //DNI
        //Crear nodos de tipo Element
        let dniLabel = document.createElement("label");//<label></label>
        let dniInput = document.createElement("input");//<input></input>
        //Crear nodo de tipo Text para el label
        let contentDni = document.createTextNode("DNI: ");
        //Añadir el nodo Text como hijo del nodo Element
        dniLabel.appendChild(contentDni);//<label>DNI: </label>
        //Añadir atributos a los input
        dniInput.type = "text";
        dniInput.id = "dni";
        dniInput.name = "dni";
        dniInput.placeholder = "Escribe tu dni";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(dniLabel);
        document.getElementById("formulario").appendChild(dniInput);

        //ESPACIO EN BLANCO
        let espacioBlanco = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco);

        //NOMBRE Y APELLIDOS
        //Crear nodos de tipo Element
        let nombreLabel = document.createElement("label");//<label></label>
        let nombreInput = document.createElement("input");//<input></input>
        //Crear nodo de tipo Text para el label
        let contentNom = document.createTextNode("Nombre y apellidos: ");
        //Añadir el nodo Text como hijo del nodo Element
        nombreLabel.appendChild(contentNom);//<label>Nombre: </label>
        //Añadir atributos a los input
        nombreInput.type = "text";
        nombreInput.id = "nombre";
        nombreInput.name = "nombre";
        nombreInput.placeholder = "Escribe tu nombre y apellidos";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(nombreLabel);
        document.getElementById("formulario").appendChild(nombreInput);

        //ESPACIO EN BLANCO 
        let espacioBlanco1 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco1);

        //DIRECCION
        //Crear nodos de tipo Element
        let dirLabel = document.createElement("label");//<label></label>
        let dirInput = document.createElement("input");//<input></input>
        //Crear nodo de tipo Text para el label
        let contentDir = document.createTextNode("Dirección: ");
        //Añadir el nodo Text como hijo del nodo Element
        dirLabel.appendChild(contentDir);//<label>Nombre: </label>
        //Añadir atributos a los input
        dirInput.type = "text";
        dirInput.id = "direccion";
        dirInput.name = "direccion";
        dirInput.placeholder = "Escribe tu dirección";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(dirLabel);
        document.getElementById("formulario").appendChild(dirInput);

        //ESPACIO EN BLANCO 
        let espacioBlanco2 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco2);

        //TELÉFONO
        //Crear nodos de tipo Element
        let telLabel = document.createElement("label");//<label></label>
        let telInput = document.createElement("input");//<input></input>
        //Crear nodo de tipo Text para el label
        let contentTel = document.createTextNode("Teléfono: ");
        //Añadir el nodo Text como hijo del nodo Element
        telLabel.appendChild(contentTel);//<label>Nombre: </label>
        //Añadir atributos a los input
        telInput.type = "text";
        telInput.id = "direccion";
        telInput.name = "direccion";
        telInput.placeholder = "Escribe tu teléfono";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(telLabel);
        document.getElementById("formulario").appendChild(telInput);

        //ESPACIO EN BLANCO 
        let espacioBlanco3 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco3);
}

function crearRadioButtonHobbies(){
        //Crear nodo de tipo Element
        let radioLabel = document.createElement("label");//<label></label>
        //Crear nodo de tipo Text para el label
        let contentLRadio = document.createTextNode("Cuales son tus hobbies: ");
        //Añadir el nodo Text como hijo del nodo Element
        radioLabel.appendChild(contentLRadio);//<label>Cuales son tus hobbies: </label>
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(radioLabel);

        let espacioBlanco = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco);

        // Crear nodo de tipo Element
        let parrafoI1 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido1 = document.createTextNode("Música");//Música
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI1.appendChild(contenido1);//<p id="parrafo1">Música</p>
        document.getElementById("formulario").appendChild(parrafoI1);

        //Crear nodos de tipo Element
        let inputRad1 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad1.type = "radio";
        inputRad1.name = "hobbies";
        inputRad1.value = "musica";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(inputRad1);

        let espacioBlanco1 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco1);

        // Crear nodo de tipo Element
        let parrafoI2 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido2 = document.createTextNode("Deporte");//Deporte
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI2.appendChild(contenido2);//<p id="parrafo1">Deporte</p>
        document.getElementById("formulario").appendChild(parrafoI2);

        //Crear nodos de tipo Element
        let inputRad2 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad2.type = "radio";
        inputRad2.name = "hobbies";
        inputRad2.value = "deporte";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(inputRad2);

        let espacioBlanco2 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco2);

        // Crear nodo de tipo Element
        let parrafoI3 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido3 = document.createTextNode("Pintar");//Pintar
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI3.appendChild(contenido3);//<p id="parrafo1">Pintar</p>
        document.getElementById("formulario").appendChild(parrafoI3);

        //Crear nodos de tipo Element
        let inputRad3 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad3.type = "radio";
        inputRad3.name = "hobbies";
        inputRad3.value = "pintar";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(inputRad3);

        let espacioBlanco3 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco3);

        // Crear nodo de tipo Element
        let parrafoI4 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido4 = document.createTextNode("Bailar");//Bailar
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI4.appendChild(contenido4);//<p id="parrafo1">Bailar</p>
        document.getElementById("formulario").appendChild(parrafoI4);

        //Crear nodos de tipo Element
        let inputRad4 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad4.type = "radio";
        inputRad4.name = "hobbies";
        inputRad4.value = "bailar";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(inputRad4);

        let espacioBlanco4 = document.createElement("br");//<br>
        document.getElementById("formulario").appendChild(espacioBlanco4);
}

function crearRadioButtonGenero(){
        //Crear nodo de tipo Element
        let radioLabel = document.createElement("label");//<label></label>
        //Crear nodo de tipo Text para el label
        let contentLRadio = document.createTextNode("Qué género tienes: ");
        //Añadir el nodo Text como hijo del nodo Element
        radioLabel.appendChild(contentLRadio);//<label>Qué género tienes:  </label>
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(radioLabel);

        let espacioBlanco = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco);

        // Crear nodo de tipo Element
        let parrafoI1 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido1 = document.createTextNode("Hombre");//Hombre
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI1.appendChild(contenido1);//<p id="parrafo1">Hombre</p>
        formulario.appendChild(parrafoI1);

        //Crear nodos de tipo Element
        let inputRad1 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad1.type = "radio";
        inputRad1.name = "genero";
        inputRad1.value = "hombre";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputRad1);

        let espacioBlanco1 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco1);

        // Crear nodo de tipo Element
        let parrafoI2 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido2 = document.createTextNode("Mujer");//Mujer
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI2.appendChild(contenido2);//<p id="parrafo1">Mujer</p>
        formulario.appendChild(parrafoI2);

        //Crear nodos de tipo Element
        let inputRad2 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad2.type = "radio";
        inputRad2.name = "genero";
        inputRad2.value = "mujer";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputRad2);

        let espacioBlanco2 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco2);

        // Crear nodo de tipo Element
        let parrafoI3 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido3 = document.createTextNode("No binario");//No binario
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI3.appendChild(contenido3);//<p id="parrafo1">No binario</p>
        formulario.appendChild(parrafoI3);

        //Crear nodos de tipo Element
        let inputRad3 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad3.type = "radio";
        inputRad3.name = "genero";
        inputRad3.value = "nobinario";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputRad3);

        let espacioBlanco3 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco3);

        // Crear nodo de tipo Element
        let parrafoI4 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido4 = document.createTextNode("NS/NC");//NS/NC
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI4.appendChild(contenido4);//<p id="parrafo1">NS/NC</p>
        formulario.appendChild(parrafoI4);

        //Crear nodos de tipo Element
        let inputRad4 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputRad4.type = "radio";
        inputRad4.name = "genero";
        inputRad4.value = "nose";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputRad4);

        let espacioBlanco4 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco4);
}

function crearCheckbox(){
        //Crear nodo de tipo Element
        let radioLabel = document.createElement("label");//<label></label>
        //Crear nodo de tipo Text para el label
        let contentLRadio = document.createTextNode("Peliculas favoritas: ");
        //Añadir el nodo Text como hijo del nodo Element
        radioLabel.appendChild(contentLRadio);//<label>Peliculas favoritas:  </label>
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(radioLabel);

        let espacioBlanco = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco);

        // Crear nodo de tipo Element
        let parrafoI1 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido1 = document.createTextNode("Cualquiera de Studio Ghibli");
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI1.appendChild(contenido1);
        formulario.appendChild(parrafoI1);

        //Crear nodos de tipo Element
        let inputCheck1 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputCheck1.type = "checkbox";
        inputCheck1.name = "peliculas";
        inputCheck1.value = "ghibli";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputCheck1);

        let espacioBlanco1 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco1);

        // Crear nodo de tipo Element
        let parrafoI2 = document.createElement("p");//<p></p>
        // Crear nodo de tipo Text
        let contenido2 = document.createTextNode("Cualquiera de Disney");
        // Añadir el nodo Text como hijo del nodo Element
        parrafoI2.appendChild(contenido2);
        formulario.appendChild(parrafoI2);

        //Crear nodos de tipo Element
        let inputCheck2 = document.createElement("input");//<input></input>
        //Añadir atributos a los input
        inputCheck2.type = "checkbox";
        inputCheck2.name = "peliculas";
        inputCheck2.value = "disney";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputCheck2);

        let espacioBlanco2 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco2);

        let parrafoI3 = document.createElement("p");
        let contenido3 = document.createTextNode("Cualquiera de Marvel");
        parrafoI3.appendChild(contenido3);
        formulario.appendChild(parrafoI3);

        let inputCheck3 = document.createElement("input");
        inputCheck3.type = "checkbox";
        inputCheck3.name = "peliculas";
        inputCheck3.value = "marvel";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputCheck3);

        let espacioBlanco3 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco3);

        let parrafoI4 = document.createElement("p");
        let contenido4 = document.createTextNode("Cualquiera de DC Comics");
        parrafoI4.appendChild(contenido4);
        formulario.appendChild(parrafoI4);

        let inputCheck4 = document.createElement("input");
        inputCheck4.type = "checkbox";
        inputCheck4.name = "peliculas";
        inputCheck4.value = "dccomis";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputCheck4);

        let espacioBlanco4 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco4);

        let parrafoI5 = document.createElement("p");
        let contenido5 = document.createTextNode("Cualquiera de Warner");
        parrafoI5.appendChild(contenido5);
        formulario.appendChild(parrafoI5);

        let inputCheck5 = document.createElement("input");
        inputCheck5.type = "checkbox";
        inputCheck5.name = "peliculas";
        inputCheck5.value = "warner";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(inputCheck5);

        let espacioBlanco5 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco5);
}

function ponerImagen(){
        let imagen1 = document.createElement("img")
        imagen1.src = "../images/imagen1.jpg"
        imagen1.alt = "imagen de monitor con lenguajes de programación"
        formulario.appendChild(imagen1)

        let espacioBlanco = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco);

        let imagen2 = document.createElement("img")
        imagen2.src = "../images/imagen2.png"
        imagen2.alt = "imagen de lenguajes de programación"
        formulario.appendChild(imagen2)

        let espacioBlanco2 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco2);
}

function crearCampoSelect(){
        var labelSelect = document.createElement("label")
        labelSelect.className = "minititulo"

        var txtLabelSelect = document.createTextNode("Seleccione el día de la semana en el que usted vendrá: ")
        labelSelect.appendChild(txtLabelSelect)
        formulario.appendChild(labelSelect)

        var select1 = document.createElement("select")
        select1.name = "diaAsistencia"

        var option1 = document.createElement("option")
        option1.value = "lunes"
        var txtoption1 = document.createTextNode("Lunes")
        option1.appendChild(txtoption1)
        select1.appendChild(option1)

        var option2 = document.createElement("option")
        option2.value = "martes"
        var txtoption2 = document.createTextNode("Martes")
        option2.appendChild(txtoption2)
        select1.appendChild(option2)

        var option3 = document.createElement("option")
        option2.value = "miercoles"
        var txtoption3 = document.createTextNode("Miércoles")
        option3.appendChild(txtoption3)
        select1.appendChild(option3)

        var option4 = document.createElement("option")
        option4.value = "jueves"
        var txtoption4 = document.createTextNode("Jueves")
        option4.appendChild(txtoption4)
        select1.appendChild(option4)

        var option5 = document.createElement ("option")
        option5.value = "viernes"
        var txtoption5 = document.createTextNode ("Viernes")
        option5.appendChild(txtoption5)
        select1.appendChild(option5)

        var option6 = document.createElement ("option")
        option6.value = "sabado"
        var txtoption6 = document.createTextNode ("Sabado")
        option6.appendChild(txtoption6)
        select1.appendChild(option6)

        var option7 = document.createElement ("option")
        option7.value = "domingo"
        var txtoption7 = document.createTextNode("Domingo")
        option7.appendChild(txtoption7)
        select1.appendChild(option7)

        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        formulario.appendChild(select1)

        let espacioBlanco = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco);
}

function crearTextArea(){
        //Label del textArea
        var labelTextArea = document.createElement("label")
        labelTextArea.className = "minititulo"
        var txtLabel = document.createTextNode("Observaciones: ")
        labelTextArea.appendChild(txtLabel)
        formulario.appendChild(labelTextArea)

        let espacioBlanco = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco);

        var observaciones = document.createElement("textarea")
        observaciones.id = "cajaobservaciones"
        observaciones.rows = "5"
        observaciones.cols = "80"

        formulario.appendChild(observaciones)

        let espacioBlanco1 = document.createElement("br");//<br>
        formulario.appendChild(espacioBlanco1);
}

function crearBotones(){
        var enviar = document.createElement("input")
        enviar.type = "submit"
        enviar.value = "Enviar formulario"
        enviar.id = "enviarDatos"
        formulario.appendChild(enviar)
        
        var limpiar = document.createElement("input")
        limpiar.type = "reset"
        limpiar.value = "Limpiar formulario"
        limpiar.id = "limpiarDatos"
        formulario.appendChild(limpiar)
}

//WINDOW.ONLOAD
window.onload = function (){
    crearTitulo()
    crearFormulario()
    crearInputDatos()
    crearRadioButtonHobbies()
    crearRadioButtonGenero()
    crearCheckbox()
    ponerImagen()
    crearCampoSelect()
    crearTextArea()
    crearBotones()
}