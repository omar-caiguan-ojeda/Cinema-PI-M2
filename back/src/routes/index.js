const { Router } = require("express");
const moviesRouter = require("./moviesRoutes");
const router = Router();


router.get("/",(req, res) => {
    res.send("Hola nuestra primera API")
})


router.use(moviesRouter);

module.exports = router;
