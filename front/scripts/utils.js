// Generador de Cards-Películas:

function displayMovies(dataFromApi) {
    const movieList = document.getElementById("moviesList");
    movieList.innerHTML = "";

    dataFromApi.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const { title, year, director, duration, genres, rate, poster } = movie;

        const stars = Array.from({ length: 10 }, (_, i) =>
            `<span class="star ${i < rate ? "active" : ""}">★</span>`
        ).join("");

        movieCard.innerHTML = `
            <img src="${poster || 'path/to/placeholder.jpg'}" alt="${title}">
            <div class="movie-description">
                <h3>${title}</h3>
                <div>
                    <p><strong>Año:</strong> ${year}</p>
                    <p><strong>Director:</strong> ${director}</p>
                    <p><strong>Duración:</strong> ${duration} min</p>
                    <p class="genre"><strong>Géneros:</strong> ${genres.join(", ")}</p>
                    <p><strong>Calificación:</strong> <span class="star-rating">${stars}</span>${rate}/10</p>
                </div>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
}


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