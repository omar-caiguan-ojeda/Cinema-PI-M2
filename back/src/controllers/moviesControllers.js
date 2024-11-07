const movieService = require("../services/movieService")

module.exports = {
    getMovies : async(req, res) => {         
        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) { 
            res.status(500).json({
                message: "Ha ocurrido un error: " + error  
                
            }); 
        } 
    },
    
  

    addMovie: async (req, res) => {
        const { title, year, director, duration, rate, poster, genres } = req.body;
        try {
        const newMovie = await movieService.createMovie({
            title,
            year,
            director,
            duration,
            rate,
            poster,
            genres,
        });
        res.status(201).json({ message: "Película creada exitosamente", data: newMovie });
        } catch (error) {
        res.status(500).json({ message: "Error al crear la película" });
        }
    },
};