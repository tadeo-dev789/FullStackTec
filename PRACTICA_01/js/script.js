var h1 = document.querySelector("h1");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var btn1 = document.querySelector("#btn1");

//1 - Cambiar el encabezado al pasar sobre la 1ra imagen
img1.addEventListener("mouseover", function () {
    cambiarH1();
});

//2 - Cambiar la segunda imagen al dar click al encabezado
h1.addEventListener("click", function () {
    cambiarImg2();
});

//3 - Cambiar el color del párrafo 3 al dar click al botón
btn1.addEventListener("click", function () {
    document.getElementById("par3").style = "color:red";
});

// 4 - Cambiar el fondo del body al hacer doble click en el h1
h1.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "#FF0000";
});

// 5 - Rotar la imagen 1 cuando el mouse pasa sobre ella
img1.addEventListener("mouseenter", function () {
    img1.style.transform = "rotate(15deg)";
    img1.style.transition = "transform 0.3s";
});

img1.addEventListener("mouseleave",function () {
    img1.style.transform = "rotate(-15deg)";
    img1.style.transition = "transform 0.3s";
})

function cambiarH1() {
    let h1 = document.querySelector("h1");
    h1.innerText = "Encabezado cambiado desde imagen";
}

function cambiarImg2() {
    document.getElementById("img2").src = "./imagenes/Malenia2.jpg";
}
