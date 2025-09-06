const dotenv = require('dotenv');
dotenv.config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // sua chave secreta no .env

/**
 * Cria um PaymentIntent no Stripe
 * @param {number} amount - valor em centavos
 * @param {string} currency - moeda, ex: 'usd', 'brl'
 * @returns PaymentIntent
 */
async function createPaymentIntent(amount, currency = 'brl') {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
        });
        return paymentIntent;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { createPaymentIntent };
