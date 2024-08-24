import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentForm.css';

const PaymentForm = ({ amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      return;
    }

    try {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
      });

      const paymentIntentResponse = await response.json();

      if (paymentIntentResponse.error) {
        setError(paymentIntentResponse.error);
      } else {
        onPaymentSuccess();
      }
    } catch (error) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment-form-container">
      <form onSubmit={handleSubmit}>
        <div className="card-element-container">
          <CardElement />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="payment-form-button" disabled={!stripe}>
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
