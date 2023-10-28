 
/*
Inicio una función que se encargará de cargar una lista 
de películas en memoria posteriormente
*/

function listarPeliculas(){
    let peliculas = [ 
        { pelicula   : 'Spiderman',
        personaje : 'Spiderman',
        actor   : 'Peter Parker' },
        { pelicula   : 'Thor',
        personaje : 'Thor',
        actor  : 'Chris Hemsworth' },
        { pelicula   : 'Hulk',
        personaje : 'Hulk',
        actor  : 'Michael Kronenberg' },
        { pelicula   : 'Deadpool',
        personaje : 'Deadpool',
        actor   : 'Ryan Reynolds' },
        { pelicula   : 'Iron man',
        personaje : 'Tony Stark',
        actor   : 'Robert Downey Jr.' },
        { pelicula   : 'Capitan America',
        personaje : 'Capitan America',
        actor  : 'Chris Evans' },
        { pelicula   : 'Spider-Man: No Way Home',
        personaje : 'Spiderman',
        actor  : 'Tom Holland' },
        { pelicula   : 'Venom',
        personaje : 'Venom',
        actor   : 'Tom Hardy' },
        { pelicula   : 'Venom',
        personaje : 'Detective Mulligan',
        actor   : 'Stephen Graham' },
        { pelicula   : 'Avenger',
        personaje : 'Ojo de Alcon',
        actor  : 'Jeremy Renner' },
        { pelicula   : 'Avengers',
        personaje : 'Falcon',
        actor  : 'Anthony Mackie' },
        { pelicula   : 'Guardianes de la galaxia',
        personaje : 'Star-Lord',
        actor   : 'Chris Pratt' },
        { pelicula   : 'Doctor Strange',
        personaje : 'Stephen Strange',
        actor   : 'Benedict Cumberbatch' },
        { pelicula   : 'Doctor Strange',
        personaje : 'Wong',
        actor  : 'Benedict Wong' },
        { pelicula   : 'Doctor Strange',
        personaje : 'Christine Palmer',
        actor  : 'Rachel McAdams' },
        { pelicula   : 'Doctor Strange',
        personaje : 'Barón Mordo',
        actor   : 'Chiwetel Ejiofor' },
        { pelicula   : 'Doctor Strange',
        personaje : 'El Anciano',
        actor   : 'Tilda Swinton' },
        { pelicula   : 'Doctor Strange',
        personaje : 'Nicodemus West',
        actor  : 'Michael Stuhlbarg' },
        { pelicula   : 'Doctor Strange 2022',
        personaje : 'Wanda Maximoff',
        actor  : 'Elizabeth Olsen' },
        { pelicula   : 'Doctor Strange 2022',
        personaje : 'América Chávez',
        actor   : 'Xochitl Gomez' },
        { pelicula   : 'Doctor Strange 2022',
        personaje : 'Clea',
        actor   : 'Charlize Theron' },
        { pelicula   : 'Doctor Strange 2022',
        personaje : 'Reed Richards',
        actor  : 'John Krasinski' }
        
    ]
    return peliculas;    
}
        

/*
Creo la función window.onload para que todo lo que se encuentra dentro de la función 
se inicialice una vez que la página html se haya cargado completamente
*/
        window.onload = function() {


    
            /*
            Creamos un elemento <h1> "encabezado", y le introducimos un id
            */
       
        var encabezado = document.createElement("h1");//<h1></h1>
        encabezado.id = "titulo" //<p id="encabezado"></p>
        
        
         /*
            Creamos un nodo texto
            */
        
        var contenido_encabezado = document.createTextNode("Bienvenidos a la convención de actores de doblaje de Marvel!");//Hola Mundo!
        
         /*
            Introducimos el nodo texto dentro del elemento <h1> "encabezado" a través del arbol DOM
            */
        encabezado.appendChild(contenido_encabezado);//<h1 id="titulo">Hola Mundo!</h1>
        
         /*
            Añadimos este elemento "encabezado" al div que tenemos en el html
            */
        div_inicial.appendChild(encabezado);
    
        

         /*
            Desde la linea en la que creamos la valiable "parrafo1", hasta que la hacemos hijo del div del html,
            hacemos los pasos para crear un párrafo y introducirlo en el arbol DOM del div del html

            Para ello, primero creamos un elemento <h3> "parrafo1", le damos un id, creamos un atributo "align", le damos el valor "center" y
            introducimos este atributo al elemento "parrafo1"
            A continuación creamos un nodo texto con el contenido del párrafo, lo hacemos hijo del elemento "parrafo1" con .appendChild
            a través de las propiedades del arbol DOM, y además hacemos hijo al elemento "parrafo1" del div del html 
            */

        var parrafo1 = document.createElement("h3");
        parrafo1.id = "p1"
        

        let atributo_parrafo1 = document.createAttribute("align")
        atributo_parrafo1.value= "center"
        parrafo1.setAttributeNode(atributo_parrafo1)

        var contenido_parrafo1 = document.createTextNode("Los actores de doblaje que vendrán a la convención quedan recogidos en la siguiente tabla:")
        parrafo1.appendChild(contenido_parrafo1)

        div_inicial.appendChild(parrafo1)

         /*
            Llamamos a la función listarPeliculas() para introducir un listado de películas en memoria
            */
        let peliculas = listarPeliculas();
        
         /*
            Creamos una tabla completa en la que iremos introduciendo las peliculas cargadas con la función listarPeliculas()
            creando todos sus elementos y haciendolos hijos de la variable "tabla" que es un 
            elemento <table>, con un orden lógico para que la tabla se forme correctamente. 
            Lo hacemos solo con la primera fila, con la de titulos, para posteriormente 
            con un for automatizar la entrada de datos a la tabla para poder traer
            e introducir los datos de cualquier sitio, de memoria o una bbdd por ej.
            */
        
            let tabla = document.createElement("table")//<table></table>
    
    let atr = document.createAttribute("align")//align
    atr.value = "center"//align="center"
    tabla.setAttributeNode(atr)//<table align="center"></table>

   
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

         /*
            Vamos con las filas de las peliculas, por cada pelicula creo una fila nueva en la tabla, 
            lo automatizo con un for para que las peliculas puedan ser ampliables o traer
            sus datos de una base de datos, por ejemplo

            */
    
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

    /*
    Una vez que genemos la tabla completada, la hacemos hija del div inicial, introudiendola en el árbol DOM de la página
    */
     div_inicial.appendChild(tabla)

   

   
     /*
     Desde la linea en la que creamos la valiable "p2", hasta que la hacemos hijo del div del html,
     hacemos los pasos para crear un párrafo y introducirlo en el arbol DOM del div del html
     creamos la variable p2, creamos un elemento h2 en ella, y le asignamos un id
     despues creamos un nodo texto y lo metemos en la variable "p2contenido", el cual hacemos hijo
     del elemento p2, y a su vez a la variable p2, donde se encuentra contenido un <h2>, la hacemos
     hija del div del html.
     */
    

    var p2 = document.createElement ("h2")
    p2.id = "p2"

    var p2contenido = document.createTextNode("Si estás interesado en asistir a la convención de actores de doblaje, rellene el siguiente formulario:")
    p2.appendChild(p2contenido)
    div_inicial.appendChild(p2)





    /*
    Creamos un elemento "form" y le asignamos una serie de atributos
    */
    
   
    var formulario = document.createElement("form")
    
    formulario.name = "formulario"
    formulario.id = "formulario"
    formulario.action= "Enviando datos a UrlServidor"
    formulario.method = "get"
    

    

    /*
    Vamos a crear una serie de labels, y cada uno de ellos irá asignado a un input a través del atributo "for"
    Los creamos como elementos individuales y después los vamos uniendo poco a poco con la funcion .appendChild y 
    los vamos haciendo hijos del formulario creado previamente, para que en el final del todo hacer hijo del div del html 
    al formulario
    */
    



    //Primer label
    var labeldni= document.createElement("label")
    
    var dnitxt = document.createTextNode("DNI :")
    labeldni.appendChild(dnitxt)
    
    var atrlabeldni = document.createAttribute("for")
    atrlabeldni.value = "dni"
    labeldni.setAttributeNode(atrlabeldni)
    
    formulario.appendChild(labeldni)

    //Primer input
    var inputDNI = document.createElement("input")
    
    inputDNI.type = "text"
    inputDNI.id = "dni"
                                                            
    inputDNI.placeholder = "Escribe aquí :"
    formulario.appendChild(inputDNI)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    //Segundo label

    var labelnombre= document.createElement("label")

    var nombretxt = document.createTextNode("Nombre :")
    labelnombre.appendChild(nombretxt)
    
    var atrlabelnombre = document.createAttribute("for")
    atrlabelnombre.value = "nombre"
    labelnombre.setAttributeNode(atrlabelnombre)
    
    formulario.appendChild(labelnombre)

    //Segundo input
    var inputNombre = document.createElement("input")
    
    inputNombre.type = "text"
    inputNombre.id = "nombre"                                                          
    inputNombre.placeholder = "Escribe aquí :"
    formulario.appendChild(inputNombre)


    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)



    //Tercer label
    var labelapellido1= document.createElement("label")
    var apellido1txt = document.createTextNode("Primer apellido :")
    labelapellido1.appendChild(apellido1txt)

    var atrlabelapellido1 = document.createAttribute("for")
    atrlabelapellido1.value = "apellido1"
    labelapellido1.setAttributeNode(atrlabelapellido1)

    formulario.appendChild(labelapellido1)

    //Tercer input
    var inputApellido1 = document.createElement("input")
    
    inputApellido1.type = "text"
    inputApellido1.id = "apellido1"                                                          
    inputApellido1.placeholder = "Escribe aquí :"
    formulario.appendChild(inputApellido1)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)




    //Cuarto label
    var labelapellido2= document.createElement("label")
    var apellido2txt = document.createTextNode("Segundo apellido :")
    labelapellido2.appendChild(apellido2txt)

    var atrlabelapellido2 = document.createAttribute("for")
    atrlabelapellido2.value = "apellido2"
    labelapellido2.setAttributeNode(atrlabelapellido2)

    formulario.appendChild(labelapellido2)


    //Cuarto input
    var inputApellido2 = document.createElement("input")
    
    inputApellido2.type = "text"
    inputApellido2.id = "apellido2"                                                           
    inputApellido2.placeholder = "Escribe aquí :"
    formulario.appendChild(inputApellido2)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)



    //Quinto label
    var labeldireccion= document.createElement("label")
    var direcciontxt = document.createTextNode("Dirección :")
    labeldireccion.appendChild(direcciontxt)

    var atrlabeldireccion = document.createAttribute("for")
    atrlabeldireccion.value = "direccion"
    labeldireccion.setAttributeNode(atrlabeldireccion)

    formulario.appendChild(labeldireccion)

    //Quinto input
    var inputDireccion = document.createElement("input")
    
    inputDireccion.type = "text"
    inputDireccion.id = "direccion"                                                           
    inputDireccion.placeholder = "Escribe aquí :"
    formulario.appendChild(inputDireccion)

    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Sexto label
    var labeltelefono= document.createElement("label")
    var telefonotxt = document.createTextNode("Teléfono :")
    labeltelefono.appendChild(telefonotxt)
    
    var atrlabeltelefono = document.createAttribute("for")
    atrlabeltelefono.value = "telefono"
    labeltelefono.setAttributeNode(atrlabeltelefono)

    formulario.appendChild(labeltelefono)
    

    //Sexto input
    var inputTelefono = document.createElement("input")
    
    inputTelefono.type = "number"
    inputTelefono.id = "telefono"                                                           
    inputTelefono.placeholder = "Escribe aquí :"
    formulario.appendChild(inputTelefono)

    /*
    Creamos unos cuantos br para hacer separaciones
    */
    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    /*
    Creamos un elemento "img" y lo hacemos hijo del formulario
    */

    var imagenheroes = document.createElement("img")
    imagenheroes.src = "images/superheroes_marvel_resized.jpg"
    formulario.appendChild(imagenheroes)

    
    
    /*
    Creamos un elemento label para introducir un radio button de 6 opciones, y le introducimos un nodo texto
    haciendolo su hijo, y el label lo hacemos hijo del formulario
    */

    var labelheroefav = document.createElement("label")
    labelheroefav.className="minititulo"
    var txtheroefav = document.createTextNode("Elige tu superheroe favorito de entre estos 6")
    labelheroefav.appendChild(txtheroefav)
    formulario.appendChild(labelheroefav)

    /*
    Comenzamos con la creación del radio button.
    Vamos a realizar la siguiente tarea en bucle:
    
    -Creamos un elemento input y le asignamos los atributos que necesitemos. Concretamente el imprescindible es el name y el value,
    ya que el name es el que hará entender al input type "radio" que esa opcion pertenece al mismo radio button, y el value servirá
    de clave para cuando se envie la información del formulario al servidor.
    -Creamos un nodo texto y lo hacemos hijo del elemento input
    -Hacemos al elemento input hijo del formulario
    -Creamos un elemento label
    -Creamos un nodo texto y lo hacemos hijo del label
    -Hacemos al elemento label hijo del formulario
    -Creamos un elemento br y lo hacemos hijo del formulario

    */
   

    //Primer input
    var inputheroe1 = document.createElement("input")
    inputheroe1.type = "radio"
    inputheroe1.id = "spiderman"
    inputheroe1.name = "heroe"
    inputheroe1.value = "spiderman"

    var txtinputheroe1 = document.createTextNode("Spiderman")
    inputheroe1.appendChild(txtinputheroe1)
    
    formulario.appendChild(inputheroe1)

    //Primer label
    var labelheroe1 = document.createElement("label")
    var txtlabelheroe1 = document.createTextNode("Spiderman")
    labelheroe1.appendChild(txtlabelheroe1)
    formulario.appendChild(labelheroe1)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)

    //Segundo input
    var inputheroe2 = document.createElement("input")
    inputheroe2.type = "radio"
    inputheroe2.id = "thor"
    inputheroe2.name = "heroe"
    inputheroe2.value = "thor"

    var txtinputheroe2 = document.createTextNode("Thor")
    inputheroe2.appendChild(txtinputheroe2)
    
    formulario.appendChild(inputheroe2)

    //Segundo label
    var labelheroe2 = document.createElement("label")
    var txtlabelheroe2 = document.createTextNode("Thor")
    labelheroe2.appendChild(txtlabelheroe2)
    formulario.appendChild(labelheroe2)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)

    //Tercer input
    var inputheroe3 = document.createElement("input")
    
  
    inputheroe3.type = "radio"
    inputheroe3.id = "hulk"
    inputheroe3.name = "heroe"
    inputheroe3.value = "hulk"

    var txtinputheroe3 = document.createTextNode("Hulk")
    inputheroe3.appendChild(txtinputheroe3)
    
    formulario.appendChild(inputheroe3)


    //Tercer label
    var labelheroe3 = document.createElement("label")
    var txtlabelheroe3 = document.createTextNode("Hulk")
    labelheroe3.appendChild(txtlabelheroe3)
    formulario.appendChild(labelheroe3)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Cuarto input
    var inputheroe4 = document.createElement("input")
    
  
    inputheroe4.type = "radio"
    inputheroe4.id = "deadpool"
    inputheroe4.name = "heroe"
    inputheroe4.value = "deadpool"

    var txtinputheroe4 = document.createTextNode("Deadpool")
    inputheroe4.appendChild(txtinputheroe4)
    
    formulario.appendChild(inputheroe4)

    //Cuarto label
    var labelheroe4 = document.createElement("label")
    var txtlabelheroe4 = document.createTextNode("Deadpool")
    labelheroe4.appendChild(txtlabelheroe4)
    formulario.appendChild(labelheroe4)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Quinto input
    var inputheroe5 = document.createElement("input")
    
  
    inputheroe5.type = "radio"
    inputheroe5.id = "ironMan"
    inputheroe5.name = "heroe"
    inputheroe5.value = "ironman"

    var txtinputheroe5 = document.createTextNode("Iron man")
    inputheroe5.appendChild(txtinputheroe5)
    
    formulario.appendChild(inputheroe5)

    //Quinto label
    var labelheroe5 = document.createElement("label")
    var txtlabelheroe5 = document.createTextNode("Iron man")
    labelheroe5.appendChild(txtlabelheroe5)
    formulario.appendChild(labelheroe5)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)
    

     

    //Sexto input
    var inputheroe6 = document.createElement("input")
    
  
    inputheroe6.type = "radio"
    inputheroe6.id = "capitanAmerica"
    inputheroe6.name = "heroe"
    inputheroe6.value = "capitanAmerica"

    var txtinputheroe6 = document.createTextNode("Capitan America")
    inputheroe6.appendChild(txtinputheroe6)
    
    formulario.appendChild(inputheroe6)

    //Sexto label
    var labelheroe6 = document.createElement("label")
    var txtlabelheroe6 = document.createTextNode("Capitan America")
    labelheroe6.appendChild(txtlabelheroe6)
    formulario.appendChild(labelheroe6)

    

    //Espacios de separación con el próximo elemento del formulario
    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    /*
    Aquí termina nuestra creación del radio button
    */

    /*
    Creamos un elemento "img" y le hacemos hijo del formulario
    */

    var imagenvillanos = document.createElement("img")
    imagenvillanos.src = "images/villanos_marvel_resized.jpg"
    formulario.appendChild(imagenvillanos)



     /*
    Creamos un elemento label para introducir un radio button de 6 opciones, y le introducimos un nodo texto
    haciendolo su hijo, y el label lo hacemos hijo del formulario
    */

    var labelvillanofav = document.createElement("label")
    labelvillanofav.className="minititulo"
    var txtvillanofav = document.createTextNode("Elige tu villano favorito de entre estos 6")
    labelvillanofav.appendChild(txtvillanofav)
    formulario.appendChild(labelvillanofav)


    /*
    Comenzamos con la creación del radio button.
    Vamos a realizar la siguiente tarea en bucle:
    
    -Creamos un elemento input y le asignamos los atributos que necesitemos. Concretamente el imprescindible es el name y el value,
    ya que el name es el que hará entender al input type "radio" que esa opcion pertenece al mismo radio button, y el value servirá
    de clave para cuando se envie la información del formulario al servidor.
    -Creamos un nodo texto y lo hacemos hijo del elemento input
    -Hacemos al elemento input hijo del formulario
    -Creamos un elemento label
    -Creamos un nodo texto y lo hacemos hijo del label
    -Hacemos al elemento label hijo del formulario
    -Creamos un elemento br y lo hacemos hijo del formulario

    */

    //Primer input
    var inputvillano1 = document.createElement("input")
    inputvillano1.type = "radio"
    inputvillano1.id = "venom"
    inputvillano1.name = "villano"
    inputvillano1.value = "venom"

    var txtinputvillano1 = document.createTextNode("Venom")
    inputvillano1.appendChild(txtinputvillano1)
    
    formulario.appendChild(inputvillano1)

    //Primer label
    var labelvillano1 = document.createElement("label")
    var txtlabelvillano1 = document.createTextNode("Venom")
    labelvillano1.appendChild(txtlabelvillano1)
    formulario.appendChild(labelvillano1)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)

    //Segundo input
    var inputvillano2 = document.createElement("input")
    inputvillano2.type = "radio"
    inputvillano2.id = "loki"
    inputvillano2.name = "villano"
    inputvillano2.value = "loki"

    var txtinputvillano2 = document.createTextNode("Loki")
    inputvillano2.appendChild(txtinputvillano2)
    
    formulario.appendChild(inputvillano2)

    //Segundo label
    var labelvillano2 = document.createElement("label")
    var txtlabelvillano2 = document.createTextNode("Loki")
    labelvillano2.appendChild(txtlabelvillano2)
    formulario.appendChild(labelvillano2)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)

    //Tercer input
    var inputvillano3 = document.createElement("input")
    
  
    inputvillano3.type = "radio"
    inputvillano3.id = "thanos"
    inputvillano3.name = "villano"
    inputvillano3.value = "thanos"

    var txtinputvillano3 = document.createTextNode("thanos")
    inputvillano3.appendChild(txtinputvillano3)
    
    formulario.appendChild(inputvillano3)


    //Tercer label
    var labelvillano3 = document.createElement("label")
    var txtlabelvillano3 = document.createTextNode("Thanos")
    labelvillano3.appendChild(txtlabelvillano3)
    formulario.appendChild(labelvillano3)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Cuarto input
    var inputvillano4 = document.createElement("input")
    
  
    inputvillano4.type = "radio"
    inputvillano4.id = "galactus"
    inputvillano4.name = "villano"
    inputvillano4.value = "galactus"

    var txtinputvillano4 = document.createTextNode("Galactus")
    inputvillano4.appendChild(txtinputvillano4)
    
    formulario.appendChild(inputvillano4)

    //Cuarto label
    var labelvillano4 = document.createElement("label")
    var txtlabelvillano4 = document.createTextNode("Galactus")
    labelvillano4.appendChild(txtlabelvillano4)
    formulario.appendChild(labelvillano4)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Quinto input
    var inputvillano5 = document.createElement("input")
    
  
    inputvillano5.type = "radio"
    inputvillano5.id = "mandarin"
    inputvillano5.name = "villano"
    inputvillano5.value = "mandarin"

    var txtinputvillano5 = document.createTextNode("Mandarin")
    inputvillano5.appendChild(txtinputvillano5)
    
    formulario.appendChild(inputvillano5)

    //Quinto label
    var labelvillano5 = document.createElement("label")
    var txtlabelvillano5 = document.createTextNode("Mandarin")
    labelvillano5.appendChild(txtlabelvillano5)
    formulario.appendChild(labelvillano5)

    //Espacios de separación
    var br = document.createElement("br")
    formulario.appendChild(br)
    


    //Sexto input
    var inputvillano6 = document.createElement("input")
    
  
    inputvillano6.type = "radio"
    inputvillano6.id = "redSkull"
    inputvillano6.name = "villano"
    inputvillano6.value = "redSkull"

    var txtinputvillano6 = document.createTextNode("Red Skull")
    inputvillano6.appendChild(txtinputvillano6)
    
    formulario.appendChild(inputvillano6)

    // Sexto input
    var labelvillano6 = document.createElement("label")
    var txtlabelvillano6 = document.createTextNode("Red Skull")
    labelvillano6.appendChild(txtlabelvillano6)
    formulario.appendChild(labelvillano6)

    //Espacios de separación con el próximo elemento del formulario
    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)

    /*
    Aquí termina nuestra creación del radio button
    */


    /*
    Creamos un label para introducir un grupo de checkboxs
    */
    
    var txtcheckboxes = document.createElement("label")
    txtcheckboxes.className="minititulo"

    var contenidoCheckboxes = document.createTextNode("Marque las casillas que le correspondan")
    txtcheckboxes.appendChild(contenidoCheckboxes)
    formulario.appendChild(txtcheckboxes)

    /*
    Comenzamos con la creación de los checkbox con sus correspondientes labels.
    Para ello, hacemos lo siguient en bucle:
    
    -Creamos un elemento input
    -Le asiggnamos los atributos necesarios. En este caso los más importantes son el atributo "checkbox" para 
    que sea un checkbox, el atributo "name" para la clave cuando se mandan los datos al servidor, y el atributo
    "value" que en los checkbox suele ser 'si' o 'no'
    -Hacemos al input hijo del formulario
    -Creamos un label
    -Creamos un nodo texto y lo hacemos hijo del label
    -Hacemos al label hijo del formulario

    */
    

    //Primer checkbox
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

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Segundo checkbox
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

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)

    
    //Tercer checkbox
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

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)


    //Cuarto Checkbox
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

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)



    //Quinto checkbox
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

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)
   
    /*
    Terminamos con los checkbox
    */


    /*
    Creamos un label para introducir un campo select
    */

    var labelselect = document.createElement("label")
    labelselect.className = "minititulo"

    var txtlabelselect = document.createTextNode("Seleccione el día de la semana en el que usted vendrá")
    labelselect.appendChild(txtlabelselect)
    formulario.appendChild(labelselect)
    
    
    /*
    Vamos a crear un campo select con 7 opciones.
    
    Para ello, creamos un elemento "select", le asignamos un atributo name
    y vamos creando elementos option con sus nodo texto y atributos "value" y haciendolos
    hijos del select
    */



    //Creamos el elemento select y le damos el atributo "name" = "dia asistencia" 
    var select1 = document.createElement("select")
    select1.name = "diaAsistencia"

    //opcion 1
    var option1 = document.createElement("option")
    option1.value = "lunes"
    var txtoption1 = document.createTextNode("Lunes")
    option1.appendChild(txtoption1)
    select1.appendChild(option1)

    //opcion 2
    var option2 = document.createElement("option")
    option2.value = "martes"
    var txtoption2 = document.createTextNode("Martes")
    option2.appendChild(txtoption2)
    select1.appendChild(option2)

    //opcion 3
    var option3 = document.createElement("option")
    option2.value = "miercoles"
    var txtoption3 = document.createTextNode("Miércoles")
    option3.appendChild(txtoption3)
    select1.appendChild(option3)

    //opcion 4
    var option4 = document.createElement("option")
    option4.value = "jueves"
    var txtoption4 = document.createTextNode("Jueves")
    option4.appendChild(txtoption4)
    select1.appendChild(option4)

    //opcion 5
    var option5 = document.createElement ("option")
    option5.value = "viernes"
    var txtoption5 = document.createTextNode ("Viernes")
    option5.appendChild(txtoption5)
    select1.appendChild(option5)

    //opcion 6
    var option6 = document.createElement ("option")
    option6.value = "sabado"
    var txtoption6 = document.createTextNode ("Sabado")
    option6.appendChild(txtoption6)
    select1.appendChild(option6)

    //opcion 7
    var option7 = document.createElement ("option")
    option7.value = "domingo"
    var txtoption7 = document.createTextNode("Domingo")
    option7.appendChild(txtoption7)
    select1.appendChild(option7)

    /*
    Una vez que el select tiene todos los option dentro de él, hacemos al select hijo
    del formulario
    */
    formulario.appendChild(select1)

    /*
    Espacios para separar elementos del formulario
    */
    var br = document.createElement("br")
    formulario.appendChild(br)
    var br = document.createElement("br")
    formulario.appendChild(br)


    /*
    Introducimos un textarea con un label, creando el elemento "label" y haciendolo hijo del formulario
    */

    var labeltextarea = document.createElement("label")
    labeltextarea.className = "minititulo"
    var txtlabeltextarea = document.createTextNode("Observaciones:")
    labeltextarea.appendChild(txtlabeltextarea)
    formulario.appendChild(labeltextarea)

    //Espacios
    var br = document.createElement("br")
    formulario.appendChild(br)

    /*
    Creamos un elemento "textarea" le introducimos los atributos necesarios
    y lo hacemos hijo del formulario
    */
    var observaciones = document.createElement("textarea")
    observaciones.id = "cajaobservaciones"
    observaciones.rows = "5"
    observaciones.cols = "80"

    formulario.appendChild(observaciones)

    /*
    Creamos un input, le introducimos el atributo "type" = submit y hacemos al input
    hijo del formulario. Esto es para crear el boton para poder enviar los datos del formulario.
    */

    var enviar = document.createElement("input")
    enviar.type = "submit"
    enviar.value = "Enviar Formulario"
    enviar.id = "enviarDatos"
    formulario.appendChild(enviar)

     /*
    Creamos un input, le introducimos el atributo "type" = reset y hacemos al input
    hijo del formulario. Esto es para poder restablecer los datos introducidos en el
    formulario, por si nos equivocaramos.
    */
   
    var limpiar = document.createElement("input")
    limpiar.type = "reset"
    limpiar.value = "limpiar formulario"
    limpiar.id = "limpiarDatos"
    formulario.appendChild(limpiar)
    

















    
   

    
    
    
    div_inicial.appendChild(formulario);


//var inicio = document.getElementById("div_inicial");
};