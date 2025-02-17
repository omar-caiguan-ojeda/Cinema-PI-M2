// Importación de módulos en TypeScript
import axios from "axios";
import { validateForm } from "./validation";
import { renderGenres } from "./render";

const disableValidations: boolean = false;

interface MovieData {
    title: string;
    year: string;
    director: string;
    duration_hours: string;
    duration_minutes: string;
    rate: string;
    poster: string;
    genres: string[];
    duration?: number;
}

const formFunction = (getMoviesCB: () => void): void => {
    renderGenres();

    const handleOnSubmit = async (e: Event): Promise<void> => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const data: MovieData = {
            title: formData.get('title') as string,
            year: formData.get('year') as string,
            director: formData.get('director') as string,
            duration_hours: formData.get('duration_hours') as string,
            duration_minutes: formData.get('duration_minutes') as string,
            rate: formData.get('rate') as string,
            poster: formData.get('poster') as string,
            genres: Array.from(form.querySelectorAll<HTMLInputElement>('input[name="opciones"]:checked'))
                .map(checkbox => checkbox.value)
        };

        if (!disableValidations && !validateForm(data)) return;

        const duration: number = (parseInt(data.duration_hours) * 60) + parseInt(data.duration_minutes);
        const movieData: MovieData = {
            ...data,
            duration: duration,
        };

        try {
            await axios.post("http://localhost:3000/movies", movieData);
            alert("Pelicula creada exitosamente");
            getMoviesCB();
            form.reset();
        } catch (error) {
            alert("Error al crear la película. Inténtelo nuevamente.");
        }
    };

    const form = document.getElementById("form_movies") as HTMLFormElement;
    form.addEventListener("submit", handleOnSubmit);

    const resetForm = (event: Event): void => {
        event.preventDefault();
        if (confirm("¿Estás seguro que deseas resetear el formulario?")) {
            form.reset();
            alert("El formulario ha sido reiniciado");
        }
    };

    const resetButton = document.querySelector('button[type="reset"]') as HTMLButtonElement;
    resetButton.addEventListener("click", resetForm);
};

export default formFunction;
