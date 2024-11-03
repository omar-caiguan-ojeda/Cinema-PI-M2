console.log("Iniciando formulario");

// Renderiza los géneros en una lista de checkboxes en el formulario
const renderForm = () => {
    const genres = [
        { name: "Acción", value: "action" },
        { name: "Aventura", value: "adventure" },
        { name: "Misterio", value: "mystery" }, 
        { name: "Comedia", value: "comedy" },
        { name: "Fantasía", value: "fantasy" },
        { name: "Thriller", value: "thriller" },
        { name: "Drama", value: "drama" },
        { name: "Horror", value: "horror" },
        { name: "Ciencia Ficción", value: "sci-fi" } 
    ];

    const checkList = document.getElementById("checkbox-list");
    genres.forEach((genre) => {
        const element = document.createElement("label");
        element.innerHTML = `<input type="checkbox" name="opciones" value="${genre.value}" class="w-auto">${genre.name}`;
        checkList.append(element);
    });
};

renderForm();  // Llama a la función para generar el formulario con los géneros

// Maneja el envío del formulario
const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);  

    // Obtiene datos del formulario
    const title = formData.get('title');
    const year = formData.get('year');
    const director = formData.get('director');
    const duration_hours = formData.get('duration_hours');
    const duration_minutes = formData.get('duration_minutes');
    const rate = formData.get('rate');
    const poster = formData.get('poster');
    const genres = Array.from(e.target.querySelectorAll('input[name="opciones"]:checked')).map(checkbox => checkbox.value);

    const data = {
        title,
        year,
        director,
        duration: `${duration_hours}hs ${duration_minutes}ms`,
        genres: genres,
        rate,
        poster
    };

    // Validación del formulario
    if (!title || !year || !director || !duration_hours || !duration_minutes || !rate || !poster) {
        alert("Todos los campos son obligatorios. Por favor completa todos los campos.");
        return;
    }

    if (year < 1895 || year > 2024) {
        alert("El año de la película debe estar entre 1895 y 2024.");
        return;
    }

    if (duration_hours < 0 || duration_hours > 857) {
        alert("La duración en horas debe estar entre 0 y 857.");
        return;
    }

    if (duration_minutes < 1 || duration_minutes > 59) {
        alert("La duración en minutos debe estar entre 1 y 59.");
        return;
    }

    if (genres.length === 0) {
        alert("Debes seleccionar al menos un género.");
        return;
    }

    if (rate < 1 || rate > 10) {
        alert("La calificación debe estar entre 1 y 10.");
        return;
    }

    console.log("Datos del formulario:", data);
};

const form = document.getElementById("form_movies");
form.addEventListener("submit", handleOnSubmit);

// Función para restablecer el formulario
const resetForm = (event) => {
    event.preventDefault();

    // Confirmación de restablecimiento
    const confirmation = confirm("¿Estás seguro que deseas resetear el formulario?");
    
    if (confirmation) {
        form.reset();
        alert("El formulario ha sido reiniciado");
    }
};

const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener("click", resetForm);
