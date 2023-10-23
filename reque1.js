 

function listarPeliculas(){
    let peliculas = [ 
        { pelicula   : 'Spiderman',
        personaje : 'Spiderman',
        actor   : 'Peter Parker' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Alien',
        personaje : 'Ridley Scott',
        actor   : 'CiFi' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' },
        { pelicula   : 'Don erre que erre',
        personaje : 'José Luis Sáenz de Heredia',
        actor   : 'Comedia' },
        { pelicula   : 'Die Hard',
        personaje : 'John McTiernan',
        actor  : 'Accion' },
        { pelicula   : '2001',
        personaje : 'Stanley Kubrik',
        actor  : 'CiFi' }
        

    ]
    return peliculas;    
}

        function cargar() {

/* CREACIÓN DE NODO */
    
        // Crear nodo de tipo Element
        var encabezado = document.createElement("h1");//<h1></h1>
        encabezado.id = "titulo" //<p id="encabezado"></p>
        
        let atributo_encabezado = document.createAttribute("align")
        atributo_encabezado.value = "center"
        encabezado.setAttributeNode(atributo_encabezado)
        
        // Crear nodo de tipo Text
        var contenido_encabezado = document.createTextNode("Bienvenidos a la convención de actores de doblaje de Marvel!");//Hola Mundo!
        
        // Añadir el nodo Text como hijo del nodo Element
        encabezado.appendChild(contenido_encabezado);//<h1 id="titulo">Hola Mundo!</h1>
        
        // Añadir el nodo Element como hijo de la pagina
        div_inicial.appendChild(encabezado);
    
        /* BORRADO DE NODO */
        //enlace.parentNode.removeChild(enlace);

        var parrafo1 = document.createElement("p");
        parrafo1.id = "p1"
        

        let atributo_parrafo1 = document.createAttribute("align")
        atributo_parrafo1.value= "center"
        parrafo1.setAttributeNode(atributo_parrafo1)

        var contenido_parrafo1 = document.createTextNode("Los actores de doblaje que vendrán a la convención quedan recogidos en la siguiente tabla:")
        parrafo1.appendChild(contenido_parrafo1)

        div_inicial.appendChild(parrafo1)

        
        let peliculas = listarPeliculas();
        
        let tabla = document.createElement("table")//<table></table>
    //Manera antigua de crear atributos:
    let atr = document.createAttribute("align")//align
    atr.value = "center"//align="center"
    tabla.setAttributeNode(atr)//<table align="center"></table>

    //Manera actual:
    tabla.setAttribute("border", "1")//<table align="center" border="1"></table>

    let trCabecera = document.createElement("tr")//<tr></tr>
    let th1 = document.createElement("th")//<th></th>
    let th2 = document.createElement("th")//<th></th>
    let th3 = document.createElement("th")//<th></th>
    let txt1 = document.createTextNode("Pelicula")//Titulo
    let txt2 = document.createTextNode("Personaje")//Director
    let txt3 = document.createTextNode("Actor")//Director

    th1.appendChild(txt1)//<th>Titulo</th>
    th2.appendChild(txt2)//<th>Director</th>
    th3.appendChild(txt3)//<th>Genero</th>
    trCabecera.appendChild(th1)//<tr><th>Titulo</th></tr>
    trCabecera.appendChild(th2)//<tr><th>Titulo</th><th>Director</th></tr>
    trCabecera.appendChild(th3)//<tr><th>Titulo</th><th>Director</th><th>Genero</th></tr>
    tabla.appendChild(trCabecera)

    //<table align="center" border="1"><tr><th>Titulo</th><th>Director</th><th>Genero</th></tr></table>

    //ahora vamos con las filas de las peliculas, por cada pelicula creo una fila nueva en la tabla
    //Put your bloody code here
    for(let pelicula of peliculas){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let txt4 = document.createTextNode(pelicula.pelicula)
        let txt5 = document.createTextNode(pelicula.personaje)
        let txt6 = document.createTextNode(pelicula.actor)
        td1.appendChild(txt4)
        td2.appendChild(txt5)
        td3.appendChild(txt6)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tabla.appendChild(tr)
    }

    
    
//Añadimos la tabla al div
    //div2.innerHTML = ""

    div_inicial.appendChild(tabla)
    

    var p2 = document.createElement ("p")
    p2.id = "p2"

    var p2contenido = document.createTextNode("Si estás interesado en asistir a la convención de actores de doblaje, rellene el siguiente formulario:")
    p2.appendChild(p2contenido)
    div_inicial.appendChild(p2)






   
    var formulario = document.createElement("form")
    
    formulario.name = "formulario"
    formulario.id = "formulario"
    formulario.action= "UrlServidor"
    formulario.method = "get"
    /*
    var atrformname = document.createAttribute("name")
    atr.value = "formulario"
    formulario.setAttributeNode(atrformname)

       var atrformid = document.createAttribute("id")
    atr.value = "formulario"
    formulario.setAttributeNode(atrformid)

        var atrformaction = document.createAttribute("action")
    atr.value = "UrlServidor"
    formulario.setAttributeNode(atrformaction)

          var atrformmethod = document.createAttribute("method")
    atr.value = "get"
    formulario.setAttributeNode(atrformmethod) 
    
    */

    

    
    var inputDNI = document.createElement("input")
    
    inputDNI.type = "text"                                                          
    inputDNI.placeholder = "DNI :"
    formulario.appendChild(inputDNI)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputNombre = document.createElement("input")
    
    inputNombre.type = "text"                                                          
    inputNombre.placeholder = "Nombre :"
    formulario.appendChild(inputNombre)


    var br = document.createElement("br")
    formulario.appendChild(br)


    var inputApellido1 = document.createElement("input")
    
    inputApellido1.type = "text"                                                          
    inputApellido1.placeholder = "Apellido1:"
    formulario.appendChild(inputApellido1)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputApellido2 = document.createElement("input")
    
    inputApellido2.type = "text"                                                          
    inputApellido2.placeholder = "Apellido2 :"
    formulario.appendChild(inputApellido2)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputDireccion = document.createElement("input")
    
    inputDireccion.type = "text"                                                          
    inputDireccion.placeholder = "Direccion:"
    formulario.appendChild(inputDireccion)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputTelefono = document.createElement("input")
    
    inputTelefono.type = "number"                                                          
    inputTelefono.placeholder = "telefono :"
    formulario.appendChild(inputTelefono)

    var br = document.createElement("br")
    formulario.appendChild(br)
   

    
    
    
    div_inicial.appendChild(formulario);


//var inicio = document.getElementById("div_inicial");
};
