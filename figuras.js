// Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
console.groupEnd();
const baseTriangulo = 4;
const alturaTriangulo = Math.sqrt((ladoTriangulo1)**2 - (baseTriangulo/2)**2);

console.log(
    "Los lados de triángulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm,"
);
console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triángulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

// Código del círculo

console.group("Círculos");
// radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");
// Pi, se puede de dos formas.

// const pi = 3.1416;
const pi = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("La circunferencia es: " + perimetroCirculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * pi; 
console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();




