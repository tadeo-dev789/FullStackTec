$(document).ready(function(){
    $("#cargarDatos").click(function(){
        $.getJSON("data/articulos.json", function(result){
          mostrarDatos(result);
        }).fail(function(){
            alert("Error al cargar los datos");
        });
    });


    function mostrarDatos(datos){
        let contenido = "";
        datos.forEach(item => {
            contenido += `<tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.descripcion}</td>
                <td>$${item.precio.toFixed(2)}</td>
                <td>${item.stock}</td>
                <td>${item.categoria}</td>
                <td>${item.fecha_ingreso}</td>
            </tr>`;
        });

        $("#datos").html(contenido);
    }
});