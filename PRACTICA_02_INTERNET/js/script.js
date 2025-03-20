// Espera a que el documento esté completamente cargado antes de ejecutar cualquier código.
$(document).ready(function() {
    // Asigna un evento de clic al botón con el ID "cargarDatos".
    $("#cargarDatos").click(function() {
        // Realiza una solicitud GET a la API de Rick and Morty para obtener datos en formato JSON.
        $.getJSON("https://rickandmortyapi.com/api/character", function(result) {
            // Llama a la función mostrarDatos y le pasa los resultados obtenidos de la API.
            mostrarDatos(result.results);  
        }).fail(function() {
            // Muestra una alerta en caso de que ocurra un error al cargar los datos.
            alert("Error al cargar los datos");
        });
    });

    /**
     * Renderiza una tabla con los datos proporcionados en el array `datos` y actualiza el contenido HTML
     * del elemento con el ID "datos".
     *
     * @param {Array<Object>} datos - Un array de objetos que contiene los datos a mostrar en la tabla.
     * @param {string} datos[].name - El nombre del personaje.
     * @param {string} datos[].status - El estado del personaje (vivo, muerto, desconocido).
     * @param {string} datos[].species - La especie del personaje.
     * @param {string} [datos[].type] - El tipo del personaje (opcional). Si no se proporciona, se muestra "N/A".
     * @param {string} datos[].image - La URL de la imagen del personaje.
     *
     * @description
     * - Inicializa una cadena vacía `contenido` para almacenar la estructura HTML.
     * - Itera sobre el array `datos` usando `forEach` para construir una fila de tabla (`<tr>`) para cada elemento.
     * - Cada fila contiene:
     *   - El nombre del personaje.
     *   - El estado del personaje.
     *   - La especie del personaje.
     *   - El tipo del personaje (o "N/A" si no está definido).
     *   - Una imagen del personaje.
     * - Finalmente, actualiza el contenido del elemento con ID "datos" con las filas generadas.
     */
    function mostrarDatos(datos) {
        // Inicializa una variable para almacenar el contenido HTML.
        let contenido = "";

        // Recorre cada elemento del array `datos`.
        datos.forEach(item => {
            // Construye una fila de tabla con los datos del personaje.
            contenido += `<tr>
                <td>${item.name}</td> <!-- Nombre del personaje -->
                <td>${item.status}</td> <!-- Estado del personaje -->
                <td>${item.species}</td> <!-- Especie del personaje -->
                <td>${item.type || "N/A"}</td> <!-- Tipo del personaje o "N/A" si no está definido -->
                <td><img src="${item.image}" class="img-fluid"></td> <!-- Imagen del personaje -->
            </tr>`;
        });

        // Actualiza el contenido HTML del elemento con ID "datos" con las filas generadas.
        $("#datos").html(contenido);
    }
});
