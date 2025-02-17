// Definición del tipo para cada género
interface Genre {
    name: string;
    value: string;
}

// Géneros de las películas:
const renderGenres = (): void => {
    const genres: Genre[] = [
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

    const checkList = document.getElementById("checkbox-list") as HTMLElement | null;
    if (!checkList) return; // Verificación de existencia

    genres.forEach((genre: Genre) => {
        const element = document.createElement("label");
        element.innerHTML = `<input type="checkbox" name="opciones" value="${genre.value}" class="w-auto">${genre.name}`;
        checkList.append(element);
    });
};

// Exporta la función para su uso en otros módulos
export { renderGenres };
