var Numero1 = 50
var RestaNumeros = Number.isInteger(Numero1)
console.log(`Es entero? ${RestaNumeros}`)

//Conversion de string a Int
var Numero2String = "100"
var ConversionSToI = Number.parseInt(Numero2String)
console.log(`Es un numero ${ConversionSToI + ConversionSToI}`) 

//Conversion de int a decimal
var Decimal1 = Number.parseFloat(Numero1).toFixed(2)
console.log(`El numero en decimal es: ${Decimal1}`)