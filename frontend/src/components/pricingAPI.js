// src/pricingAPI.js
const moviePrices = {
    123: 12.99,
    456: 15.49,
    789: 9.99,
    // Add more mock prices for movie IDs
  };
  
  export const getPriceForMovie = (movieId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(moviePrices[movieId] || 10); // Default to $10 if no price is found
      }, 500); // Simulate network delay
    });
  };
  