const express = require('express');
const stripe = require('stripe')('sk_test_51PrHxH05vtujCDFKA7iJT8rKjaqKkm45wmvbClG6Wi9vh3oaHM0hXoiq3LIDAmkrIMo7PO9Vc5kpSVmNqidBLH3o00vQZzDdwq'); // Replace with your Stripe secret key
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { paymentMethodId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
