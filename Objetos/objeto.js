var _Usuario = "Alejo"

var miObjeto = {
    //Clave y valor
    Nombre : "Jorge",
    Edad : 15,
    Importante : true,
    Texto : `Usuario ${_Usuario}`,
    miSuma : (a, b) => `La suma es: ${a + b}`,
    Papas : {
        NombrePapa : "Rodolfo",
        NombreMama : "Maria"
    },
    Nacimiento : new Date()
}

console.log(miObjeto.Nombre + " " + miObjeto.Edad + " " + miObjeto.Importante + " " + miObjeto.Texto + " " + miObjeto.miSuma(8,9) + " " + miObjeto.Papas.NombreMama + " " + miObjeto.Nacimiento.getDay())


//Desestructuracion de objetos
var {Nombre} = miObjeto
console.log(Nombre)

//Desglozamiento de objeto
var otraFuncion = ({Texto}) => Texto
console.log(otraFuncion(miObjeto))