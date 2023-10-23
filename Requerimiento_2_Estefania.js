function calcularPrecio() {
    const formulario = document.getElementById("pedido-form");
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

    if (precioBase === 0) {
        alert("Debes seleccionar un tamaño de pizza.");
        return;
    }

    if (precioIngredientes === 0) {
        alert("Debes seleccionar al menos un ingrediente.");
        return;
    }

    const precioTotal = precioBase + precioIngredientes;
    //no se si sacar solo el precio total 
    document.getElementById("resultado").innerHTML = `Tamaño: ${tamano}<br>Ingredientes: ${precioIngredientes}€<br>Precio total: ${precioTotal}€`;
}