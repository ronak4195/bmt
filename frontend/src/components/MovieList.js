import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./MovieList.css";
const MovieList = ({ addToCart }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=acbc1a7a2b07a5f41359e6542aaa6e34`
        );
        console.log(response.data); // Log response to ensure data is fetched
        setMovies(response.data.results); // Set the movie list
      } catch (err) {
        setError("Error fetching movies");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {error && <p>{error}</p>}
      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Movie key={movie.id} movie={movie} addToCart={addToCart} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
