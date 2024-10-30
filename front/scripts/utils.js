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
};

const displayMoviesFail = ( msg = "No se pudieron cargar las películas. Inténtelo mas tarde." ) =>{
    const carouselInner = document.getElementById("moviesList");
    carouselInner .innerHTML = `<p>${msg}</p>`;
    return;
}

const modulesExport = {
    displayMovies,
    displayMoviesFail
}
module.exports = modulesExport;