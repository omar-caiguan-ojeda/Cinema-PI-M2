const displayMovies = require("./utils");

// Llamada a la API para obtener las películas
$.get("https://students-api.up.railway.app/movies", (data, status) => {
    if (status === "success") {
        displayMovies(data); // Llamar a displayMovies con los datos obtenidos
        console.log("concurrently es funcionando de mil maravillas!!!")
    } else {
        console.error("Error al obtener los datos de la API.");
    };
});
