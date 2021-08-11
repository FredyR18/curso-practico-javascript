// Código para el cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código para el triángulo

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base , lado1) {
    const altura = Math.sqrt((lado1)**2 - (base/2)**2);
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo

console.group("Círculos");

function diametroCirculo(radio) {
    return radio * 2;
}

// Pi, se puede de dos formas.
// const pi = 3.1416;
const pi = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};

// Área
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

// Aquí interactuamos con el HTML.

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    if(perimetro == 0) {
        alert("Valor incorrecto");
    } else {
        alert(perimetro);
    }
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1Triangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("inputLado2Triangulo");
    const value2 = input2.value;

    const input3 = document.getElementById("inputBaseTriangulo");
    const value3 = input3.value;

    const value4 = parseInt(value1) * parseInt(value2) * parseInt(value3);
    if (value4 == 0) {
        alert("Valor incorrecto");
    } else {
        const perimetro = perimetroTriangulo(value1, value2, value3);
        alert(perimetro);
    }
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputLado1Triangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("inputLado2Triangulo");
    const value2 = input2.value;

    const input3 = document.getElementById("inputBaseTriangulo");
    const value3 = input3.value;

    if(value1 != value2){
        const error = "El tríangulo no es Isóseles"
        alert(error); 
    } else {
        const area = areaTriangulo(value3, value1);
        alert(area);
    }
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}



