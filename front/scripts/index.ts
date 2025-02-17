import formFunction from "./form";
import * as utils from "./utils";
import axios from "axios";

const URL_API: string = "http://localhost:3000/";

const getMovies = async (): Promise<void> => {
    try {
        const res = await axios.get<{ length: number }[]>(`${URL_API}movies`);
        
        if (!res.data?.length) {
            utils.displayMoviesFail("No hay películas para mostrar.");
            return;
        }
        utils.displayMovies(res.data);
    } catch (e) {
        console.error("Error al obtener películas:", e);
        utils.displayMoviesFail();
    }
};

const initPage = (): void => {
    const path: string = window.location.pathname;

    if (path.includes("index.html")) {
        getMovies();
    } else if (path.includes("form.html")) {
        formFunction(getMovies);
    }
};

initPage();
