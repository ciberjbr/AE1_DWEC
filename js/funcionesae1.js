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
            /*
            
            var parrafo = document.createElement("p");
            var texto = document.createTextNode("Hola Mundo!");
            parrafo.appendChild(texto);
            contenedor.appendChild(parrafo);
            */



function crearParrafo(){
            // Crear nodo de tipo Element
    let parrafo = document.createElement("p");//<p></p>
            
            // Crear nodo de tipo Text
    let contenido = document.createTextNode("Hola Mundo!");//Hola Mundo!
            
            // Añadir el nodo Text como hijo del nodo Element
    parrafo.appendChild(contenido);//<p id="parrafo1">Hola Mundo!</p>

            // Añadir el nodo Element como hijo de la pagina
    //document.body.appendChild(parrafo);

    //let contDiv = document.getElementsById("contenedor");
    //contDiv.appendChild(parrafo);

    // Añadir el nodo Element como hijo del div cuyo id = "contenedor"
    document.getElementById("contenedor").appendChild(parrafo);

}

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

function crearRadioButton(){
        //Crear nodo de tipo Element
        let radioLabel = document.createElement("label");//<label></label>
        //Crear nodo de tipo Text para el label
        let contentLRadio = document.createTextNode("Cuales son tus hobbies: ");
        //Añadir el nodo Text como hijo del nodo Element
        radioLabel.appendChild(contentLRadio);//<label>Cuales son tus hobbies: </label>
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(radioLabel);

        //ESPACIO EN BLANCO 
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

        //ESPACIO EN BLANCO 
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

        //ESPACIO EN BLANCO 
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

        //ESPACIO EN BLANCO 
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
}









//WINDOW.ONLOAD
window.onload = function (){
    crearTitulo()
    crearFormulario()
    crearInputDatos()
    crearRadioButton()
    //createElementAndAppend();

}