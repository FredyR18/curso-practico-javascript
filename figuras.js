// Código del cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// console.groupEnd();
// const baseTriangulo = 4;

// console.log(
//     "Los lados de triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm,"
// );
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base , lado1) {
    const altura = Math.sqrt((lado1)**2 - (base/2)**2);
    return (base * altura) / 2;
}
// console.log("El area del triángulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

// Código del círculo

console.group("Círculos");
// radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");
// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
};
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");
// Pi, se puede de dos formas.

// const pi = 3.1416;
const pi = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};
// console.log("La circunferencia es: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * pi;
}; 
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aquí interactuamos con el HTML.

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
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

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
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



