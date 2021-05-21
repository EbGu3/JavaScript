//Uso de for
var MiArreglo = [
    "Hola",
    2020,
    "Adios"
]

for (i = 0; i < MiArreglo.length; i++)
{
    console.log(MiArreglo[i])
}

var MiArregloPersonas = [
    persona1 = {
        Nombre : "Jose",
        Edad : 25
    },
    persona2 = {
        Nombre : "Maria",
        Edad : 25
    },
    persona3 = {
        Nombre : "Ruben",
        Edad : 25
    }    
]

for(let i = 0; i < MiArregloPersonas.length; i++)
{
    console.log(MiArregloPersonas[i].Nombre)
}

//Uso de foreach
MiArregloPersonas.forEach(Element => {
    console.log(Element.Nombre)
});

//Uso de forech y index
MiArregloPersonas.forEach((Element, i) => {
    console.log(`Id: ${i} | Nombre: ${Element.Nombre}`)

});
