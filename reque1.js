<script>
function cargar(){
    /* CREACIÓN DE NODO */

    // Crear nodo de tipo Element
    var encabezado = document.createElement("p");//<p></p>
    encabezado.id = "parrafo1" //<p id="parrafo1"></p>
    
    // Crear nodo de tipo Text
    var contenido = document.createTextNode("Hola Mundo!");//Hola Mundo!
    
    // Añadir el nodo Text como hijo del nodo Element
    encabezado.appendChild(contenido);//<p id="parrafo1">Hola Mundo!</p>
    
    // Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(encabezado);

    /* BORRADO DE NODO */
    enlace.parentNode.removeChild(enlace);
    
};
</script>









var inicio = document.getElementById("div_inicial");

