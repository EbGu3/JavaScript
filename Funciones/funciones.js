//Son un conjunto de sentencias que realizan una tarea

function saludo() {
    console.log("Hola a todos mis subscriptores")
}

function miSuma(a,b) {
    return  a + b
}

var _resta = function(a, b) {
    return a - b
}

saludo()
console.log("Mi suma es: " + miSuma(8,9))
console.log("La resta es: " + _resta(8,1))