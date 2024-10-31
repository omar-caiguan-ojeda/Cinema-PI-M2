const { Router } = require("express");
const moviesRouter = require("./moviesRoutes");
//const { getMovies } = require("../controllers/moviesControllers");
// const moviesController = require("../controllers/moviesControllers");
// const moviesController = require("../controllers/moviesControllers");


const router = Router();

router.get("/",(req, res) => {
    res.send("Hola nuestra primera API")
})

router.use(moviesRouter);

// router.get("/movies", moviesController.getMovies);

module.exports = router;

// Por que cuando paso getMovies como parametro de la funcion get no la ejecuta
//ejecutar = hacer()
//porque solo necesita la funcion para que se ejecute al llamarla.