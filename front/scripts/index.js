// Home

const formFunction = require("./form.js");
const utils = require("./utils");
const axios = require("axios");

const URL_API = "http://localhost:3000/";

const getMovies = async () => {
    try {
        const res = await axios(URL_API + "movies");
        
        if (!res.data?.length) {
            return utils.displayMoviesFail("No hay películas para mostrar.");
        }
        return utils.displayMovies(res.data);
    } catch (e) {
        console.error("Error al obtener películas:", e);
        return utils.displayMoviesFail();
    }
};

getMovies();
const initPage = () => {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        getMovies();
    } else if (path.includes("form.html")) {
        formFunction(getMovies);
    }
};

initPage();

