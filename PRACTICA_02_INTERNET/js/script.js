$(document).ready(function(){
    $("#cargarDatos").click(function(){
        $.getJSON("https://rickandmortyapi.com/api/character", function(result){
          mostrarDatos(result.results);  
        }).fail(function(){
            alert("Error al cargar los datos");
        });
    });

    function mostrarDatos(datos){
        let contenido = "";

        datos.forEach(item => {
            contenido += `<tr>
                <td>${item.name}</td>
                <td>${item.status}</td>
                <td>${item.species}</td>
                <td>${item.type || "N/A"}</td>
                <td><img src="${item.image}" class="img-fluid"></td>
            </tr>`;
        });

        $("#datos").html(contenido);
    }
});
