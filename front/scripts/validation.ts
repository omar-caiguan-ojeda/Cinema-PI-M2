interface FormData {
    title: string;
    year: number;
    director: string;
    duration_hours: number;
    duration_minutes: number;
    rate: number;
    poster: string;
    genres: string[];
}

const validateForm = (data: FormData): boolean => {
    const { title, year, director, duration_hours, duration_minutes, rate, poster, genres } = data;

    if (!title || !year || !director || !duration_hours || !duration_minutes || !rate || !poster) {
        alert("Todos los campos son obligatorios. Por favor completa todos los campos.");
        return false;
    }

    if (duration_hours < 0 || duration_hours > 12) {
        alert("La duración en horas debe estar entre 0 y 12.");
        return false;
    }
    if (duration_minutes < 1 || duration_minutes > 59) {
        alert("La duración en minutos debe estar entre 1 y 59.");
        return false;
    }
    if (genres.length === 0) {
        alert("Debes seleccionar al menos un género.");
        return false;
    }
    if (rate < 1 || rate > 10) {
        alert("La calificación debe estar entre 1 y 10.");
        return false;
    }
    return true;
};

export { validateForm };
