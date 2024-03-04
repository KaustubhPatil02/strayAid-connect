// server.js

const express = require('express');
const stripe = require('stripe')('pk_test_51OqBBySAiODbXNxVcI1DDQEMzE9s3nSaVB5y53qsPL8O9zwiii9ygmHJqSW8yfSh5aQ27oly2Hy5A8f5bWgYNoxL009intw30n-gkrf-vdfu-malw-wlea');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
