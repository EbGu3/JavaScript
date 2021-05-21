var Peliculas = [
    pelicula1 = {
        Titulo : "La casa de papel",
        Año : 2020,
        Valoracion : 5
    },
    pelicula2 = {
        Titulo : "Tortugas ninja",
        Año : 2021,
        Valoracion : 3
    },
    pelicula3 = {
        Titulo : "KunFu Panda",
        Año : 2018,
        Valoracion : 5
    },
    pelicula4 = {
        Titulo : "El pozo",
        Año : 2006,
        Valoracion : 1
    },
    pelicula5 = {
        Titulo : "Nemo",
        Año : 2006,
        Valoracion : 4
    },
]

let nuevoObjeto = ({Valoracion}) => {
    Valoracion >= 5 ? Valoracion += 1 : Valoracion += 0
    let objeto = {}
    objeto["Valoracion"] = Valoracion
    return objeto
} 
let miNuevaValoracion = Peliculas.map(nuevoObjeto)
console.log(miNuevaValoracion)

let SumaExtra = ({Valoracion}) => Valoracion >= 5 ? Valoracion += 1 : Valoracion += 0
let Valorado = Peliculas.map(SumaExtra)
console.log(Valorado) 

//Retorna el valor de la suma de todas las valoraciones en un objeto
let ReducirValoracion = (acum, {Valoracion}) => acum + Valoracion 
let MiValoracion = Peliculas.reduce(ReducirValoracion, 0)
console.log(MiValoracion)


