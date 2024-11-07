module.exports = (req, res, next) => {
    const { title, year, director, duration, rate, poster, genres } = req.body;
    
    if (!title || !year || !director || !duration || !rate || !poster || !genres) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

  next()
};
  