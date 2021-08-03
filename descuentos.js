// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPrecioDescuento() {
    const inputPrecio = document.getElementById("InputPrecio");
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("InputDescuento");
    const descuentoValue = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento es: $" + precioConDescuento;
}




// console.log("El precio con descuento es:" + precioConDescuento);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
