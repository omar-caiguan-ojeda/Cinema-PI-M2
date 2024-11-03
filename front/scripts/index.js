require ("./form.js");

const utils = require("./utils");
const axios = require("axios");

const url = "https://students-api.up.railway.app/movies";
const URL_API = "http://localhost:3000/";

const getMovies = async () => {
    try{
        const res = await axios(URL_API + "movies");
        if(!res.data?.length) {
            return utils.displayMoviesFail("No hay películas para mostrar.");
        };
        return utils.displayMovies(res.data);
    } catch(e){
        console.log("Error");
        return utils.displayMoviesFail;
    } finally{
        console.log("")
    }
};

getMovies();

// Llamada a la API para obtener las películas
// $.get("https://students-api.up.railway.app/movies", (data, status) => {
//     if (status === "success") {
//         displayMovies(data); // Llamar a displayMovies con los datos obtenidos
//     } else {
//         console.error("Error al obtener los datos de la API.");
//     };
// });


//////////////////////////////////////////////////////


// const request = $.get("https://students-api.up.railway.app/movies");

// request.done((data, status) => {
//     return utils.displayMovies(data);
// });

// request.fail(() => {
//     utils.displayMoviesFail;
// });

/////////////////////////////////////////////////////

// const a = axios.get("https://students-api.up.railway.app/movies")
// .then((res)=>{
//     console.log("axios res.data", res.data);
//     return utils.displayMovies(res.data);
// })
// .catch((error)=> {
//     console.log("Error en la petición", error);
//     return utils.displayMoviesFail;
// })
// .finally(()=>{
//     console.log("Logramos nuestra llamada con promesa")
// })

// console.log("new", a);

//////////////////////////////////////////////////////////////////



import { Activity, Repository } from './activity.js';

// const URL_API = "https://example.com/api/";  // Reemplazar con la URL de la API

async function addMoviePost(activity) {
    try {
        const response = await fetch(URL_API + "posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(activity),
        });
        
        if (response.ok) {
            console.log("Película agregada exitosamente:", activity);
        } else {
            console.error("Error al agregar la película:", response.statusText);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

$(document).ready(function() {
    $("#movieForm").submit(function(event) {
        event.preventDefault();
        
        const newActivity = Repository.getFormData();
        addMoviePost(newActivity);
        Repository.clearForm();
    });
});
