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
            var contenedor = document.getElementsByTagName("div");
            var formulario = document.createElement("form");
            var textoArea = document.createElement("textarea");
            var textAreaPlace = document.createAttribute("placeholder");


            textoArea.appendChild(formulario);
            formulario.appendChild(contenedor);*/
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
        let contentLabel = document.createTextNode("DNI: ");
        //Añadir el nodo Text como hijo del nodo Element
        dniLabel.appendChild(contentLabel);//<label>DNI: </label>
        //Añadir atributos a los input
        dniInput.type = "text";
        dniInput.id = "dni";
        dniInput.name = "dni";
        dniInput.placeholder = "Escribe tu dni";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(dniLabel);
        document.getElementById("formulario").appendChild(dniInput);

        //Nombre
        //Crear nodos de tipo Element
        let nombreLabel = document.createElement("label");//<label></label>
        let nombreInput = document.createElement("input");//<input></input>
        //Crear nodo de tipo Text para el label
        let contentLabelN = document.createTextNode("Nombre: ");
        //Añadir el nodo Text como hijo del nodo Element
        nombreLabel.appendChild(contentLabelN);//<label>Nombre: </label>
        //Añadir atributos a los input
        dniInput.type = "text";
        dniInput.id = "nombre";
        dniInput.name = "nombre";
        dniInput.placeholder = "Escribe tu nombre";
        //Añadir el nodo Element como hijo del div cuyo id = "formulario"
        document.getElementById("formulario").appendChild(nombreLabel);
        document.getElementById("formulario").appendChild(nombreInput);
}







//WINDOW.ONLOAD
window.onload = function (){
    crearTitulo()
    crearFormulario()
    crearInputDatos()
    //createElementAndAppend();

}