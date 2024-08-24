import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe'; // Import the stripePromise
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  const removeFromCart = (movieId) => {
    setCart(cart.filter((movie) => movie.id !== movieId));
  };

  return (
   
    <Router>
      <div className="app-container">
        <Navbar cartCount={cart.length} />
        <div className="main-content">
          <Elements stripe={stripePromise}>
            <Routes>
              <Route path="/" element={<MovieList addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
          </Elements>
        </div>
      </div>
    </Router>
  );
}

export default App;
