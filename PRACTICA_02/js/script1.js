// Espera a que el documento esté completamente cargado antes de ejecutar el código
$(document).ready(function() {
    // Asigna un evento de clic al botón con el id "cargarDatos"
    $("#cargarDatos").click(function() {
        // Realiza una solicitud GET para obtener un archivo JSON
        $.getJSON("data/articulos.json", function(result) {
            // Si la solicitud es exitosa, llama a la función mostrarDatos con los datos obtenidos
            mostrarDatos(result);
        }).fail(function() {
            // Si la solicitud falla, muestra un mensaje de error
            alert("Error al cargar los datos");
        });
    });

    // Define la función mostrarDatos que recibe un parámetro 'datos'
    function mostrarDatos(datos) {
        // Inicializa una variable para almacenar el contenido HTML
        let contenido = "";
        // Itera sobre cada elemento en el arreglo 'datos'
        datos.forEach(item => {
            // Agrega una fila de tabla con los datos del elemento actual
            contenido += `<tr>
                <td>${item.id}</td> <!-- Muestra el ID del artículo -->
                <td>${item.nombre}</td> <!-- Muestra el nombre del artículo -->
                <td>${item.descripcion}</td> <!-- Muestra la descripción del artículo -->
                <td>$${item.precio.toFixed(2)}</td> <!-- Muestra el precio del artículo con 2 decimales -->
                <td>${item.stock}</td> <!-- Muestra la cantidad en stock del artículo -->
                <td>${item.categoria}</td> <!-- Muestra la categoría del artículo -->
                <td>${item.fecha_ingreso}</td> <!-- Muestra la fecha de ingreso del artículo -->
            </tr>`;
        });

        // Inserta el contenido generado dentro del elemento con el id "datos"
        $("#datos").html(contenido);
    }
});