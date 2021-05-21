var AccesoUsuario =  false
var EstaLloviendo = false

//Condicion cumpliendo el true
if(AccesoUsuario) {
    console.log("El usuario tiene acceso")
}
else {
    console.log("El usuario no tiene acceso")
}

//Condicion cumpliendo el false
if(EstaLloviendo) {
    console.log("Esta lloviendo")
}
else {
    console.log("No esta lloviendo")
}

//Condicion usando if, else if, else
if(AccesoUsuario && EstaLloviendo) {
    console.log("El usuario tiene acceso y esta lloviendo")
}
else if(AccesoUsuario) {
    console.log("El usuario tiene acceso y no esta lloviendo")
}
else {
    console.log("El usuario no tiene acceso y no esta lloviendo")
}