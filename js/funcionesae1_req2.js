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

window.onload = function (){

    function calcularPrecio() {
        const nombre = formulario.elements.nombre.value;
        const direccion = formulario.elements.direccion.value;
        const telefono = formulario.elements.telefono.value;
        const email = formulario.elements.email.value;
        const tamano = formulario.elements.tamano.value;
        const ingredientes = formulario.elements['ingredientes[]'];
    
        let precioBase = 0;
    
        switch (tamano) {
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
    
        let precioIngredientes = 0;
    
        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i].checked) {
                precioIngredientes += 1;
            }
        }

        if (nombre == "" || direccion == "" || telefono == "" || email == ""){
            alert("Faltan datos");
            return;
        }
        
        if (precioBase === 0) {
            alert("Debes seleccionar un tamaño de pizza.");
            return;
        }
    
        if (precioIngredientes === 0) {
            alert("Debes seleccionar al menos un ingrediente.");
            return;
        }

        const precioTotal = precioBase + precioIngredientes;
        document.getElementById("resultado").innerHTML = `Tamaño: ${tamano}<br>Ingredientes: ${precioIngredientes}€<br>Precio total: ${precioTotal}€`;
    }
        

    boton.onclick = calcularPrecio;
}