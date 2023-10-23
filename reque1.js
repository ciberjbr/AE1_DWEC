 

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

        window.onload = function() {

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

   
    

    var p2 = document.createElement ("h2")
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

    var imagenheroes = document.createElement("img")
    imagenheroes.src = "images/superheroes_marvel_resized.jpg"
    formulario.appendChild(imagenheroes)

    
    
    
    var labelheroefav = document.createElement("h3")
    var txtheroefav = document.createTextNode("Elige tu superheroe favorito de entre estos 6")
    labelheroefav.appendChild(txtheroefav)
    formulario.appendChild(labelheroefav)

    

    var inputheroe1 = document.createElement("input")
    inputheroe1.type = "radio"
    inputheroe1.id = "spiderman"
    inputheroe1.name = "heroe"
    inputheroe1.value = "spiderman"

    var txtinputheroe1 = document.createTextNode("Spiderman")
    inputheroe1.appendChild(txtinputheroe1)
    
    formulario.appendChild(inputheroe1)

    var labelheroe1 = document.createElement("label")
    var txtlabelheroe1 = document.createTextNode("Spiderman")
    labelheroe1.appendChild(txtlabelheroe1)
    formulario.appendChild(labelheroe1)

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

    var labelheroe2 = document.createElement("label")
    var txtlabelheroe2 = document.createTextNode("Thor")
    labelheroe2.appendChild(txtlabelheroe2)
    formulario.appendChild(labelheroe2)

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


    var labelheroe3 = document.createElement("label")
    var txtlabelheroe3 = document.createTextNode("Hulk")
    labelheroe3.appendChild(txtlabelheroe3)
    formulario.appendChild(labelheroe3)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var inputheroe4 = document.createElement("input")
    
  
    inputheroe4.type = "radio"
    inputheroe4.id = "deadpool"
    inputheroe4.name = "heroe"
    inputheroe4.value = "deadpool"

    var txtinputheroe4 = document.createTextNode("Deadpool")
    inputheroe4.appendChild(txtinputheroe4)
    
    formulario.appendChild(inputheroe4)

    var labelheroe4 = document.createElement("label")
    var txtlabelheroe4 = document.createTextNode("Deadpool")
    labelheroe4.appendChild(txtlabelheroe4)
    formulario.appendChild(labelheroe4)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var inputheroe5 = document.createElement("input")
    
  
    inputheroe5.type = "radio"
    inputheroe5.id = "ironMan"
    inputheroe5.name = "heroe"
    inputheroe5.value = "ironman"

    var txtinputheroe5 = document.createTextNode("Iron man")
    inputheroe5.appendChild(txtinputheroe5)
    
    formulario.appendChild(inputheroe5)

    var labelheroe5 = document.createElement("label")
    var txtlabelheroe5 = document.createTextNode("Iron man")
    labelheroe5.appendChild(txtlabelheroe5)
    formulario.appendChild(labelheroe5)

    var br = document.createElement("br")
    formulario.appendChild(br)
    

     

    var inputheroe6 = document.createElement("input")
    
  
    inputheroe6.type = "radio"
    inputheroe6.id = "capitanAmerica"
    inputheroe6.name = "heroe"
    inputheroe6.value = "capitanAmerica"

    var txtinputheroe6 = document.createTextNode("Capitan America")
    inputheroe6.appendChild(txtinputheroe6)
    
    formulario.appendChild(inputheroe6)

    var labelheroe6 = document.createElement("label")
    var txtlabelheroe6 = document.createTextNode("Capitan America")
    labelheroe6.appendChild(txtlabelheroe6)
    formulario.appendChild(labelheroe6)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    var imagenvillanos = document.createElement("img")
    imagenvillanos.src = "images/villanos_marvel_resized.jpg"
    formulario.appendChild(imagenvillanos)


    var labelvillanofav = document.createElement("h3")
    var txtvillanofav = document.createTextNode("Elige tu villano favorito de entre estos 6")
    labelvillanofav.appendChild(txtvillanofav)
    formulario.appendChild(labelvillanofav)

    

    var inputvillano1 = document.createElement("input")
    inputvillano1.type = "radio"
    inputvillano1.id = "venom"
    inputvillano1.name = "villano"
    inputvillano1.value = "venom"

    var txtinputvillano1 = document.createTextNode("Venom")
    inputvillano1.appendChild(txtinputvillano1)
    
    formulario.appendChild(inputvillano1)

    var labelvillano1 = document.createElement("label")
    var txtlabelvillano1 = document.createTextNode("Venom")
    labelvillano1.appendChild(txtlabelvillano1)
    formulario.appendChild(labelvillano1)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var inputvillano2 = document.createElement("input")
    inputvillano2.type = "radio"
    inputvillano2.id = "loki"
    inputvillano2.name = "villano"
    inputvillano2.value = "loki"

    var txtinputvillano2 = document.createTextNode("Loki")
    inputvillano2.appendChild(txtinputvillano2)
    
    formulario.appendChild(inputvillano2)

    var labelvillano2 = document.createElement("label")
    var txtlabelvillano2 = document.createTextNode("Loki")
    labelvillano2.appendChild(txtlabelvillano2)
    formulario.appendChild(labelvillano2)

    var br = document.createElement("br")
    formulario.appendChild(br)

    
    var inputvillano3 = document.createElement("input")
    
  
    inputvillano3.type = "radio"
    inputvillano3.id = "thanos"
    inputvillano3.name = "villano"
    inputvillano3.value = "thanos"

    var txtinputvillano3 = document.createTextNode("thanos")
    inputvillano3.appendChild(txtinputvillano3)
    
    formulario.appendChild(inputvillano3)


    var labelvillano3 = document.createElement("label")
    var txtlabelvillano3 = document.createTextNode("Thanos")
    labelvillano3.appendChild(txtlabelvillano3)
    formulario.appendChild(labelvillano3)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var inputvillano4 = document.createElement("input")
    
  
    inputvillano4.type = "radio"
    inputvillano4.id = "galactus"
    inputvillano4.name = "villano"
    inputvillano4.value = "galactus"

    var txtinputvillano4 = document.createTextNode("Galactus")
    inputvillano4.appendChild(txtinputvillano4)
    
    formulario.appendChild(inputvillano4)

    var labelvillano4 = document.createElement("label")
    var txtlabelvillano4 = document.createTextNode("Galactus")
    labelvillano4.appendChild(txtlabelvillano4)
    formulario.appendChild(labelvillano4)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var inputvillano5 = document.createElement("input")
    
  
    inputvillano5.type = "radio"
    inputvillano5.id = "mandarin"
    inputvillano5.name = "villano"
    inputvillano5.value = "mandarin"

    var txtinputvillano5 = document.createTextNode("Mandarin")
    inputvillano5.appendChild(txtinputvillano5)
    
    formulario.appendChild(inputvillano5)

    var labelvillano5 = document.createElement("label")
    var txtlabelvillano5 = document.createTextNode("Mandarin")
    labelvillano5.appendChild(txtlabelvillano5)
    formulario.appendChild(labelvillano5)

    var br = document.createElement("br")
    formulario.appendChild(br)
    


    var inputvillano6 = document.createElement("input")
    
  
    inputvillano6.type = "radio"
    inputvillano6.id = "redSkull"
    inputvillano6.name = "villano"
    inputvillano6.value = "redSkull"

    var txtinputvillano6 = document.createTextNode("Red Skull")
    inputvillano6.appendChild(txtinputvillano6)
    
    formulario.appendChild(inputvillano6)

    var labelvillano6 = document.createElement("label")
    var txtlabelvillano6 = document.createTextNode("Red Skull")
    labelvillano6.appendChild(txtlabelvillano6)
    formulario.appendChild(labelvillano6)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    
    var txtcheckboxes = document.createElement("h3")
    var contenidoCheckboxes = document.createTextNode("Marque las casillas que le correspondan")
    txtcheckboxes.appendChild(contenidoCheckboxes)
    formulario.appendChild(txtcheckboxes)
    

    var checkbox1 = document.createElement("input")
    checkbox1.type = "checkbox"
    checkbox1.id = "18"
    checkbox1.name = "mayorEdad"
    checkbox1.value = "si"

    formulario.appendChild(checkbox1)

    var labelcheckbox1 = document.createElement("label")
    var txtlabelcheckbox1 = document.createTextNode("¿Eres mayor de edad?")
    labelcheckbox1.appendChild(txtlabelcheckbox1)
    formulario.appendChild(labelcheckbox1)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var checkbox2 = document.createElement("input")
    checkbox2.type = "checkbox"
    checkbox2.id = "intolerancias"
    checkbox2.name = "intolerancias"
    checkbox2.value = "si"

    formulario.appendChild(checkbox2)

    var labelcheckbox2 = document.createElement("label")
    var txtlabelcheckbox2 = document.createTextNode("¿Tienes alguna intolerancia alimenticia?")
    labelcheckbox2.appendChild(txtlabelcheckbox2)
    formulario.appendChild(labelcheckbox2)

    var br = document.createElement("br")
    formulario.appendChild(br)

    
    var checkbox3 = document.createElement("input")
    checkbox3.type = "checkbox"
    checkbox3.id = "compañia"
    checkbox3.name = "compañia"
    checkbox3.value = "si"

    formulario.appendChild(checkbox3)

    var labelcheckbox3 = document.createElement("label")
    var txtlabelcheckbox3 = document.createTextNode("¿Vienes acompañado?")
    labelcheckbox3.appendChild(txtlabelcheckbox3)
    formulario.appendChild(labelcheckbox3)

    var br = document.createElement("br")
    formulario.appendChild(br)


    var checkbox4 = document.createElement("input")
    checkbox4.type = "checkbox"
    checkbox4.id = "mañana"
    checkbox4.name = "mañana"
    checkbox4.value = "si"

    formulario.appendChild(checkbox4)

    var labelcheckbox4 = document.createElement("label")
    var txtlabelcheckbox4 = document.createTextNode("¿Marque en caso de venir en horario de mañana")
    labelcheckbox4.appendChild(txtlabelcheckbox4)
    formulario.appendChild(labelcheckbox4)

    var br = document.createElement("br")
    formulario.appendChild(br)



    var checkbox5 = document.createElement("input")
    checkbox5.type = "checkbox"
    checkbox5.id = "tarde"
    checkbox5.name = "tarde"
    checkbox5.value = "si"

    formulario.appendChild(checkbox5)

    var labelcheckbox5 = document.createElement("label")
    var txtlabelcheckbox5 = document.createTextNode("¿Marque en caso de venir en horario de tarde?")
    labelcheckbox5.appendChild(txtlabelcheckbox5)
    formulario.appendChild(labelcheckbox5)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)
   



    var labelselect = document.createElement("label")
    

    var txtlabelselect = document.createTextNode("Seleccione el día de la semana en el que usted vendrá")
    labelselect.appendChild(txtlabelselect)
    formulario.appendChild(labelselect)

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

    formulario.appendChild(select1)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    var labeltextarea = document.createElement("label")
    var txtlabeltextarea = document.createTextNode("Observaciones:")
    labeltextarea.appendChild(txtlabeltextarea)
    formulario.appendChild(labeltextarea)

    var br = document.createElement("br")
    formulario.appendChild(br)

    var observaciones = document.createElement("textarea")
    observaciones.rows = "5"
    observaciones.cols = "80"
    observaciones.style = "resize: none;"
    formulario.appendChild(observaciones)
    

















    
   

    
    
    
    div_inicial.appendChild(formulario);


//var inicio = document.getElementById("div_inicial");
};
