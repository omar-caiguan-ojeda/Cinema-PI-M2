const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    title: { type: String },

    year: { type: Number },

    director: { type: String },

    duration: { type: Number },

    rate: {type: Number },

    poster: { type: String },

    genres: { type: Array },

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;