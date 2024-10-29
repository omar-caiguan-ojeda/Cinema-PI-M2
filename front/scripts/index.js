// Función para mostrar las películas en el HTML
function displayMovies(dataFromApi) {
    const movieList = document.getElementById("moviesList");
    movieList.innerHTML = ""; // Limpiar el contenedor antes de agregar películas

    dataFromApi.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        // Extraer propiedades usando destructuring
        const { title, year, director, duration, genre, rate, poster } = movie;

        // Crear la estructura HTML para cada tarjeta de película
        movieCard.innerHTML = `
            <img src="${poster}" alt="${title}">
            <h3>${title}</h3>
            <p><strong>Año:</strong> ${year}</p>
            <p><strong>Director:</strong> ${director}</p>
            <p><strong>Duración:</strong> ${duration}</p>
            <p><strong>Rating:</strong> ${rate}</p>
            <p class="genre"><strong>Géneros:</strong> ${genre.join(", ")}</p>
        `;

        movieList.appendChild(movieCard);
    });
}

// Llamada a la API para obtener las películas
$.get("https://students-api.up.railway.app/movies", (data, status) => {
    if (status === "success") {
        displayMovies(data); // Llamar a displayMovies con los datos obtenidos
    } else {
        console.error("Error al obtener los datos de la API.");
    }
});
