/*
En esta actividad debes desarrollar un formulario completo, sin envío al servidor,
que sirva para dar de alta un pedido de una pizza dentro de una web de una pizzería.

Los campos del formulario son los siguientes:
- Nombre
- Dirección
- Teléfono
- Email
- Un radio button con el tamaño de la pizza, pudiendo ser pequeña, mediana o grande
- 4 Checkbox con los diferentes ingredientes de la pizza
- Un botón de procesar el pedido
Todos los campos tienen que estar rellenos de tipo texto deben de estar rellenos para que
sean válidos, además debe de elegir obligatoriamente un tamaño de la pizza y al menos un ingrediente para ella.

Al pulsar el botón de procesar el pedido, se mostrará el precio total del pedido
calculándolo en base a los siguientes parámetros:
5€ para la pizza pequeña
10€ para la pizza mediana
15€ para la pizza grande
Cada ingrediente elegido tendrá un valor de 1€
*/

//var formulario = document.getElementById("formPedido");

window.onload = function (){

    function calcularPrecio(){
        //formulario es el id del form
        let tamanoPizza = formulario.elements.tamano.value;

        //Declaramos variable precioBase de cada pizza
        let precioBase = 0;
        console.log (tamanoPizza);
        switch (tamanoPizza) {
            case "pequena":
                precioBase = 5;
                break;
            case "mediana":
                precioBase = 10;
                break;
            case "grande":
                precioBase = 15;
                break;
        }
        console.log(precioBase);

        if (precioBase === 0) {
            alert("Debes seleccionar un tamaño de pizza.");
            return;
        }

        //acceder al checkbox para saber cuantos ingredientes ha elegido y sumarlo
        //let ingrediente = formulario.elements.ingredientes.value;
        let arrayIngredientes = ["jamon", "queso", "champinones", "aceitunas"];
        let ingredienteSeleccion = formulario.elements.ingredientes.checked;
        let precioIngrediente = 0;

        console.log(arrayIngredientes);
        
        for (let i = 0; i < arrayIngredientes.length; i++){
            if (arrayIngredientes[i] == ingredienteSeleccion){
                precioIngrediente += 1;
            }
        }
        
        if (precioIngrediente === 0) {
            alert("Debes seleccionar al menos un ingrediente.");
            return;
        }
        
        let precioTotal = precioBase + precioIngrediente;
        //no se si sacar solo el precio total 
        document.getElementById("resultado").innerHTML = `Tamaño: ${tamano}<br>Ingredientes: ${precioIngredientes}€<br>Precio total: ${precioTotal}€`;

    }

    //onclick: al apretar el boton para nos calculará el precio
    //boton es el id del button
    boton.onclick = calcularPrecio;
}