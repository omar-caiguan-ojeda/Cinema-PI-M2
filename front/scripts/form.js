// Formulario

const axios = require("axios");
const { validateForm } = require("./validation");
const { renderGenres } = require("./render");
const disableValidations = false;

const formFunction = (getMoviesCB) => {
    renderGenres();

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            title: formData.get('title'),
            year: formData.get('year'),
            director: formData.get('director'),
            duration_hours: formData.get('duration_hours'),
            duration_minutes: formData.get('duration_minutes'),
            rate: formData.get('rate'),
            poster: formData.get('poster'),
            genres: Array.from(e.target.querySelectorAll('input[name="opciones"]:checked')).map(checkbox => checkbox.value)
        };

        if (!disableValidations && !validateForm(data)) return;

        const duration = (parseInt(data.duration_hours) * 60) + parseInt(data.duration_minutes);
        const movieData = {
            ...data,
            duration: duration,
        };

        try {
            await axios.post("http://localhost:3000/movies", movieData);
            alert("Pelicula creada exitosamente");
            getMoviesCB();
            e.target.reset();
        } catch (error) {
            alert("Error al crear la película. Inténtelo nuevamente.");
        }
    };

    const form = document.getElementById("form_movies");
    form.addEventListener("submit", handleOnSubmit);

    const resetForm = (event) => {
        event.preventDefault();
        if (confirm("¿Estás seguro que deseas resetear el formulario?")) {
            form.reset();
            alert("El formulario ha sido reiniciado");
        }
    };

    const resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener("click", resetForm);
};

module.exports = formFunction;
