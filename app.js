

/// Cotizador (suma) de valores de los productos que se quieren comprar + aplicacion de descunetos dependiendo de los montos de dinero a comprar ///

let valorA
let valorB 
let valorC 
let valorD
let resultadoOp

valorA = prompt ("Ingrese el primer valor")
valorB = prompt ("Ingrese el segundo valor")
valorC = prompt ("Ingrese el tercer valor")

valorA = parseInt(valorA)
valorB = parseInt(valorB)
valorC = parseInt(valorC)

resultadoOp = valorA + valorB + valorC

console.log (resultadoOp)

if (resultadoOp>=100 && resultadoOp<=200)
{
    console.log ("Aplicar 10 % entra de descuento")
    console.log (resultadoOp * 0.90)
    alert (resultadoOp * 0.90)
}
else
{    
    if (resultadoOp>=201 && resultadoOp<=400)
    {
        console.log ("Aplicar 20 % entra de descuento")
        console.log (resultadoOp * 0.80)
        alert (resultadoOp * 0.80)  
    }
    else
    {
        if (resultadoOp>=401 && resultadoOp<=700)
        {
            console.log ("Aplicar 25 % entra de descuento")
            console.log (resultadoOp * 0.75)
            alert (resultadoOp * 0.75)
        }
        else (resultadoOp<=99)
        {
            console.log ("No hay descuento extra")
        }
    }
}    

//// Barra de navegacion aplicando un ciclo ////

let opcion 

do {
    opcion=prompt("1- Marcas \n 2-Cotizaciones \n 3- Configuracion \n 4- Salir")
    opcion=parseInt(opcion)
    switch(opcion)
    {
        case 1:
            alert ("Ingresando a Marcas")
            break
        case 2:
            alert ("Ingresando a Cotizaciones")
            break
        case 3:
            alert ("Ingresando a Configuracion")
            break
        case 4:
            alert ("Saliendo..")
            break
        default: ("Opcion Invalida!")
    }
} while (opcion !=4);








