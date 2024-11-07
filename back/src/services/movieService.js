const axios = require('axios');
const Movie = require("../models/Movie");

class MovieClass {
  constructor ({title, year, director, duration, genre, rate, poster}) {
    if(!title || !director || !poster) {
      throw new Error("Las propiedades 'title', 'director' y 'poster' son obligatorias.")
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = {
  getAllMovies: async () => {
    try {
      const moviesList = await Movie.find({});
      return moviesList;
    } catch (error) {
      console.log("Error fetching movies:", error);
      throw error;
    }
  },

  createMovie: async (movieData) => {
    try {
      const newMovie = await Movie.create(movieData);
      return newMovie;
    } catch (error) {
      console.log("Error creating movie:", error);
      throw error;
    }
  },
};

