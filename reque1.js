        function cargar(){
        /* CREACIÓN DE NODO */
    
        // Crear nodo de tipo Element
        var encabezado = document.createElement("h1");//<h1></h1>
        encabezado.id = "titulo" //<p id="encabezado"></p>
        
        // Crear nodo de tipo Text
        var contenido_encabezado = document.createTextNode("Hola Mundo!");//Hola Mundo!
        
        // Añadir el nodo Text como hijo del nodo Element
        encabezado.appendChild(contenido_encabezado);//<h1 id="encabezado">Hola Mundo!</h1>
        
        // Añadir el nodo Element como hijo de la pagina
        document.body.div_inicial.appendChild(encabezado);
    
        /* BORRADO DE NODO */
        //enlace.parentNode.removeChild(enlace);
        
    };











//var inicio = document.getElementById("div_inicial");

