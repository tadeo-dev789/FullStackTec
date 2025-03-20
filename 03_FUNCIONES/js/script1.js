// alert("Inicio del script")


var  boton = document.querySelector("#btnPrueba");

// boton.onclick = function functionprb(){

//     alert("inicio del script");
//     let var1 = document.querySelector("#par2")
//     var1.innerText = "Cambiando el parrafo 2"

//     cambiarparrafo("#par1","Cambiando parrafo 1")
//     cambiarparrafo("#par3","Cambiando parrafo 3")

// }

var parrafo3 = document.querySelector("#par3")

// parrafo3.onmouseover= function(){
//     cambiarparrafo("#btnPrueba","Cambie el texto desde el P3")
// }

var parrafo1 = document.querySelector("#par1")

// parrafo2.onmouseover= function(){
//     cambiarparrafo("#T1","Cambie el texto desde el P1")
// }

function txtParrafo2_3(){
    let var2 = document.querySelector("#par3")
    var2.innerText = "Se cambio desde el parrafo 2"
}

function txtParrafo3_2(){
    let var2 = document.querySelector("#par2")
    var2.innerText = "Se cambio desde el parrafo 3"
}

const cambiarparrafo = (id,texto)=>{
    let varLocal = document.querySelector(id)
    varLocal.innerText = texto
}

boton.addEventListener("click", ()=>{

    alert("inicio del script");
    let var1 = document.querySelector("#par2")
    var1.innerText = "Cambiando el parrafo 2"
    cambiarparrafo("#par1","Cambiando parrafo 1")
    cambiarparrafo("#par2","Cambiando parrafo 2 de nuevo")
    prueba3();

    //Este tipo de funciones se llama funciones flecha
    //Arrow Function
    //La funcion está definida dentro del codigo
    ((id, texto)=>{
        cambiarparrafo(id,texto)
    })("#par3","cambiando parrafo 3");

    alert(suma(5,2))
    alert(cuadrado(7))
    alert(nombrecompleto("Sandoval Santos","Luis Enrique Tadeo"))

})

parrafo1.addEventListener("mouseover",()=>{
    cambiarparrafo("#T1","Cambie el texto desde el P1")
})

parrafo3.addEventListener("mouseover",()=>{
    cambiarparrafo("#btnPrueba","Cambie el texto desde el P3")
})


//En una llamada a una funcion flecha se necesita poner llaves

const prueba3 = ()=>{
    alert("alerta dentro de prueba3")
    alert("alerta 2 dentro de prueba3")
}
    

//Se le puede quitar el return y tambien los parentesis

//const suma = (num1,num2)=>{return num1 + num2}

const suma = (num1,num2)=>num1 + num2

//const cuadrado  = (numero) => numero*numero
const cuadrado  = numero => numero*numero

const nombrecompleto = (apellido,nombre) => apellido +" "+ nombre

//Pasar el mouse por parrafo 3 se cambia el texto del boton
//Pasar el mouse por el parrafo 2 se cambia el texto del encabezado