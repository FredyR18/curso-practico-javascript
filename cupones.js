const cupones = [
    "1",
    "2",
    "3",
];
function calcularPrecioConCupon (precio, cupon) {
    const porcentajePrecioConCupon = 100 - cupon;
    const precioConCupon = (precio * porcentajePrecioConCupon) / 100;

    return precioConCupon;
}

function buttonPrecioConCupon() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = inputPrecio.value;

    const inputCupon = document.cupon.inputCupon.value;

    // let descuento;

    // switch(inputCupon) {
    //     case "1":
    //         descuento = 30;
    //     break;
    //     case "2":
    //         descuento = 20;
    //     break;
    //     case "3":
    //         descuento = 40;
    //     break;
    // }
    if (!cupones.includes(inputCupon)) {
        alert("El cupón " + inputCupon + "no es válido");
     } else if (inputCupon === "1") {
        descuento = 15;
     } else if (inputCupon === "2") {
        descuento = 30;
     } else if (inputCupon === "3") {
        descuento = 25;
     }

    const precioConCupon = calcularPrecioConCupon (precioValue, descuento);

    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento es: $" + precioConCupon;
}