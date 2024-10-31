module.exports = {
    // en el futuro esto es lo que hablara con la base de datos, donde guardamos las peliculas
    getMovies: async(req, res)=> {
        res.status(200);
        res.send("Proximamente tendremos cargardas las películas");
        //res.status(201)
        /*
        try{
        intentar recibir datos
        } catch () {
        arreglar si no lo recibimos 
        }
        
        */
    }
};


