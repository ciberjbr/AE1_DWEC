 

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

    
     div_inicial.appendChild(tabla)
//Añadimos la tabla al div
    //div2.innerHTML = ""

   
    

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

    

    


    var labeldni= document.createElement("label")
    
    var dnitxt = document.createTextNode("DNI :")
    labeldni.appendChild(dnitxt)
    
    var atrlabeldni = document.createAttribute("for")
    atrlabeldni.value = "dni"
    labeldni.setAttributeNode(atrlabeldni)
    
    formulario.appendChild(labeldni)

    
    var inputDNI = document.createElement("input")
    
    inputDNI.type = "text"
    inputDNI.id = "dni"
    //inputDNI.name = "labdni"                                                         
    inputDNI.placeholder = "Escribe aquí :"
    formulario.appendChild(inputDNI)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    var labelnombre= document.createElement("label")

    var nombretxt = document.createTextNode("Nombre :")
    labelnombre.appendChild(nombretxt)
    
    var atrlabelnombre = document.createAttribute("for")
    atrlabelnombre.value = "nombre"
    labelnombre.setAttributeNode(atrlabelnombre)
    
    formulario.appendChild(labelnombre)

    var inputNombre = document.createElement("input")
    
    inputNombre.type = "text"
    inputNombre.id = "nombre"                                                          
    inputNombre.placeholder = "Escribe aquí :"
    formulario.appendChild(inputNombre)


    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)



    var labelapellido1= document.createElement("label")
    var apellido1txt = document.createTextNode("Primer apellido :")
    labelapellido1.appendChild(apellido1txt)

    var atrlabelapellido1 = document.createAttribute("for")
    atrlabelapellido1.value = "apellido1"
    labelapellido1.setAttributeNode(atrlabelapellido1)

    formulario.appendChild(labelapellido1)

    var inputApellido1 = document.createElement("input")
    
    inputApellido1.type = "text"
    inputApellido1.id = "apellido1"                                                          
    inputApellido1.placeholder = "Escribe aquí :"
    formulario.appendChild(inputApellido1)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)




    var labelapellido2= document.createElement("label")
    var apellido2txt = document.createTextNode("Segundo apellido :")
    labelapellido2.appendChild(apellido2txt)

    var atrlabelapellido2 = document.createAttribute("for")
    atrlabelapellido2.value = "apellido2"
    labelapellido2.setAttributeNode(atrlabelapellido2)

    formulario.appendChild(labelapellido2)


    var inputApellido2 = document.createElement("input")
    
    inputApellido2.type = "text"
    inputApellido2.id = "apellido2"                                                           
    inputApellido2.placeholder = "Escribe aquí :"
    formulario.appendChild(inputApellido2)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)



    var labeldireccion= document.createElement("label")
    var direcciontxt = document.createTextNode("Dirección :")
    labeldireccion.appendChild(direcciontxt)

    var atrlabeldireccion = document.createAttribute("for")
    atrlabeldireccion.value = "direccion"
    labeldireccion.setAttributeNode(atrlabeldireccion)

    formulario.appendChild(labeldireccion)

    var inputDireccion = document.createElement("input")
    
    inputDireccion.type = "text"
    inputDireccion.id = "direccion"                                                           
    inputDireccion.placeholder = "Escribe aquí :"
    formulario.appendChild(inputDireccion)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    var labeltelefono= document.createElement("label")
    var telefonotxt = document.createTextNode("Teléfono :")
    labeltelefono.appendChild(telefonotxt)
    
    var atrlabeltelefono = document.createAttribute("for")
    atrlabeltelefono.value = "telefono"
    labeltelefono.setAttributeNode(atrlabeltelefono)

    formulario.appendChild(labeltelefono)
    

    var inputTelefono = document.createElement("input")
    
    inputTelefono.type = "number"
    inputTelefono.id = "telefono"                                                           
    inputTelefono.placeholder = "Escribe aquí :"
    formulario.appendChild(inputTelefono)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    var labelheroefav = document.createElement("label")
    var txtheroefav = document.createTextNode("Elige tu superheroe favorito de entre estos 6")
    labelheroefav.appendChild(txtheroefav)
    formulario.appendChild(labelheroefav)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputheroe1 = document.createElement("input")
    inputheroe1.type = "radio"
    inputheroe1.id = "spiderman"
    inputheroe1.name = "heroe"
    inputheroe1.value = "spiderman"

    var txtinputheroe1 = document.createTextNode("Spiderman")
    inputheroe1.appendChild(txtinputheroe1)
    
    formulario.appendChild(inputheroe1)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputheroe2 = document.createElement("input")
    inputheroe2.type = "radio"
    inputheroe2.id = "thor"
    inputheroe2.name = "heroe"
    inputheroe2.value = "thor"

    var txtinputheroe2 = document.createTextNode("Thor")
    inputheroe2.appendChild(txtinputheroe2)
    
    formulario.appendChild(inputheroe2)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputheroe3 = document.createElement("input")
    
  
    inputheroe3.type = "radio"
    inputheroe3.id = "hulk"
    inputheroe3.name = "heroe"
    inputheroe3.value = "hulk"

    var txtinputheroe3 = document.createTextNode("Hulk")
    inputheroe3.appendChild(txtinputheroe3)
    
    formulario.appendChild(inputheroe3)







    
   

    
    
    
    div_inicial.appendChild(formulario);


//var inicio = document.getElementById("div_inicial");
};
