function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce (
        function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        } 
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

let valor = [];

function ingresarValor() {
    // do {
        const dato = document.getElementById("inputValor");
        const dato1 = parseInt(dato.value);
        valor.push(dato1);
    // } 
    // while (cacularPromedio() || cacularModa() || cacularMediana()); 
}
// Para la media

function cacularPromedio() {
    const promedio = calcularMediaAritmetica(valor);
    resultadoP.innerText = "La media aritmética es : " + promedio;
}

// Para la moda

function cacularModa() {
    const lista1Count = {};
    valor.map(
        function (elemento) {
            if(lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const moda = lista1Array[lista1Array.length - 1];
    resultadoP.innerText = "La moda es : " + moda;
}

// Para la mediana

function cacularMediana() {
    valor.sort(function(a,b) {
        return a - b;
    });
    const mitadLista1 = parseInt(valor.length / 2);
    let mediana;
    if(esPar(valor.length)) {
        const elemento1 = valor[mitadLista1 - 1];
        const elemento2 = valor[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        resultadoP.innerText = "La mediana es : " + mediana;
    } else {
         mediana = valor[mitadLista1];
         resultadoP.innerText = "La mediana es : " + mediana;
    }
}


