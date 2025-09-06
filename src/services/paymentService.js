const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Cria um PaymentIntent no Stripe
 * @param {number} amount - valor em centavos
 * @param {string} currency - moeda, ex: 'brl'
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
