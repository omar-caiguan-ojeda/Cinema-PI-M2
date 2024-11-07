const { Router } = require("express");
const moviesController = require("../controllers/moviesControllers");
const validateMovieData = require("../middleware/validateMovieData");
const moviesRouter = Router();

moviesRouter.get("/movies", moviesController.getMovies);

moviesRouter.post("/movies", validateMovieData, moviesController.addMovie);


module.exports = moviesRouter;