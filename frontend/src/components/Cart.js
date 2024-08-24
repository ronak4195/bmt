import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const total = cart.reduce((acc, movie) => acc + movie.price, 0);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((movie) => (
            <div key={movie.id} className="cart-item">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div>
                <h2>{movie.title}</h2>
                <p>Price: ${movie.price}</p>
              </div>
              <button onClick={() => removeFromCart(movie.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          {!paymentSuccess ? (
            <PaymentForm amount={total} onPaymentSuccess={handlePaymentSuccess} />
          ) : (
            <p>Payment Successful! Thank you for your purchase.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
