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


//Funciones de flecha
var acceso = true

 //Funcion que le pasamos parametros
var AccesoU = acceso => acceso

//Funcion que no le pasamos parametros
var AccesoU2 = () => false
    AccesoU2(acceso) == true ? console.log("Usuario permitido") : console.log("Usuario no permitido")

//Funcion con mas de un parametro
var AccesoU3 = (nombre, acceso) => console.log(`El usuario ${nombre} tiene acceso? ${acceso}`)
    AccesoU3("Juan", true)


//Funcion para retornar mas de dos instrucciones
var Acceso4 = () => {
    console.log("Usuario en ejecucion")
    return true;
}

    Acceso4()




