document.addEventListener("DOMContentLoaded",()=>{
    alert("carga del DOMContentLoaded");

    fetch('data/articulos.json')
    .then(response => response.json())
    .then(data=>{
        const articulos = data;
        console.log(articulos);
        const par1= document.querySelector("#par2");
        par1.innerHTML = "<b>Articulos</b><br>";

        articulos.forEach(articulo => {
            par1.innerHTML += `🛒 ${articulo.nombre} - $${articulo.precio} <br>
            Descripción: ${articulo.descripcion} <br>
            Stock: ${articulo.stock} <br>
            Categoría: ${articulo.categoria} <br>
            Fecha de ingreso: ${articulo.fecha_ingreso} <br><br>`;
        });
    })
})