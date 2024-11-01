const movieService = require("../services/movieService")

module.exports = {
    getMovies : async(req, res) => {         // También deberá ser una funcion Async
        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) { //(error)
            res.status(500).json({
                message: "Ha ocurrido un error: " + error  
                // Nunca debemos dejar ese futuro error a la zar. error => message
            }); // Siempre debemos incluír un posible fallo. ademas sacar "+ e.message"
        } 
    },
    
    
    
    // // en el futuro esto es lo que hablará con la base de datos, donde guardamos las peliculas
    // getMovies: async(req, res)=> {
    //     res.status(200);
    //     res.send("Proximamente tendremos cargardas las películas");
    //     //res.status(201)
    //     /*
    //     try{
    //     intentar recibir datos
    //     } catch () {
    //     arreglar si no lo recibimos 
    //     }
        
    //     */
    // }
};




