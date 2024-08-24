import React, { useEffect, useState } from "react";
import { getPriceForMovie } from "./pricingAPI";
import "./MovieList.css"; // Ensure this import is included

const Movie = ({ movie, addToCart }) => {
  const [price, setPrice] = useState(null);
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    const fetchPrice = async () => {
      const fetchedPrice = await getPriceForMovie(movie.id);
      setPrice(fetchedPrice);
    };

    fetchPrice();
  }, [movie.id]);

  if (price === null) return <p>Loading...</p>;

  return (
    <div className="movie-item">
      <img src={posterUrl} alt={movie.title} className="movie-poster" />
      <h2>{movie.title}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <button 
  onClick={() => addToCart({ ...movie, price })}  
  style={{ 
    backgroundColor: "#007bff", /* Bright blue color */
    color: "white", /* White text color */
    border: "none", /* Remove default border */
    padding: "10px 20px", /* Padding for the button */
    borderRadius: "5px", /* Rounded corners */
    fontSize: "1em", /* Font size */
    cursor: "pointer", /* Pointer cursor on hover */
    transition: "background-color 0.3s" /* Smooth background color transition */
  }}
>
  Add to Cart
</button>
    </div>
  );
};

export default Movie;
