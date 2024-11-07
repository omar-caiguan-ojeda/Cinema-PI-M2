// Géneros de las películas:

const renderGenres = () => {
    const genres = [
        { name: "Acción", value: "Action" },
        { name: "Aventura", value: "Adventure" },
        { name: "Misterio", value: "Mystery" },
        { name: "Comedia", value: "Comedy" },
        { name: "Fantasía", value: "Fantasy" },
        { name: "Thriller", value: "Thriller" },
        { name: "Drama", value: "Drama" },
        { name: "Horror", value: "Horror" },
        { name: "Ciencia Ficción", value: "Sci-fi" }
    ];

    const checkList = document.getElementById("checkbox-list");
    genres.forEach((genre) => {
        const element = document.createElement("label");
        element.innerHTML = `<input type="checkbox" name="opciones" value="${genre.value}" class="w-auto">${genre.name}`;
        checkList.append(element);
    });
};

module.exports = { renderGenres };
