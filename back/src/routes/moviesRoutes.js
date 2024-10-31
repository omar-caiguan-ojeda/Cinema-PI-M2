const { Router } = require("express");
const moviesController = require("../controllers/moviesControllers");

const moviesRouter = Router();

moviesRouter.get("/movies", moviesController.getMovies);

module.exports = moviesRouter;