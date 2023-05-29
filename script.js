
var number1 = 50
var number2 = 100
var resultado = number1 + number2
var flag = false
var solucion = 'La solucion es: '+resultado
const fraseExiste = 'El numero es 50'
const fraseNoExiste = 'El numero no es 50'
var texto1 = 'Hola esto es una prueba'
var nombres = ['Miguel', ' Leolo', ' Alex']
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let coche = {
    marca: 'Ford',
    model: 'GT',
    year: '2023',
    doors: '3',

    horsePower: {
        primerModelo: 200,
        segundoModelo: 300,
    }
}

function numeroPuertas(){
    let puertas = coche.doors
    let mensajePuertas = "El coche tiene "+puertas+" puertas."
    console.log(mensajePuertas)
    document.write(mensajePuertas)
    document.write("<br>")
}

function atributoAnidado(){
    let caballos = coche.horsePower.primerModelo
    let mensajeCaballos = "El coche tiene "+caballos+" caballos."
    document.write(mensajeCaballos)
    console.log(mensajeCaballos)
    document.write("<br>")
}


if(number1 === 50){
    flag = true
} 

if(flag === true){
    document.write(fraseExiste)
    document.write("<br>")
} else {
    document.write(fraseNoExiste)
    document.write("<br>")
}


function mostrarMensaje(){
let mensaje=`Hola, ${nombres[0]}`
console.log(nombres)
document.write(nombres)
document.write("<br>")
}

function sumar(){
    let resultadoSuma = number1 + number2;
    console.log(resultadoSuma)
    document.write(resultadoSuma)
    document.write("<br>")

}

function parImpar(){
    if(number1 % 2 === 1){
        let solucionPares = "El numero es impar"
        console.log(solucionPares)
        document.write(solucionPares)
        document.write("<br>")
     } else {
        let solucionPares = "El numero es par"
        console.log(solucionPares)
        document.write(solucionPares)
        document.write("<br>")
     }
}


mostrarMensaje()
sumar()
parImpar()
numeroPuertas()
atributoAnidado()

document.write(solucion)
document.write("<br>")
document.write(array)