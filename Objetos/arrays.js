var permitido = "Usuario Permitido"
var miFuncion1 = acceso => acceso
var persona = {
    Nombre : "Pepe", 
    MiAutoMovil : [
        miLlanta = {
            Marca : "Micheline"
        },
        miPintura = {
            Marca : "Marca",
            Color: "Rojo"            
        }
    ]
}

var MiArray = [
    "Jorge", 
    "Maria", 
    "David",  
    true, 
    3, 
    8.9, 
    [
        "OtroArray", 
        "2020"
    ],
    miFuncion1(permitido),
    persona
]


console.log(MiArray[8].MiAutoMovil[1].Color)