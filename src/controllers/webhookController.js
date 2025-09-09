const dotenv = require('dotenv');
dotenv.config();

const Stripe = require('stripe');
const Order = require('../models/Order');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];

    try {
        const event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );

        // 🔔 Debug para entender o que chega
        console.log("🔔 Evento recebido:", event.type);
        if (event.data && event.data.object) {
            console.log("🧾 PaymentIntent ID recebido:", event.data.object.id);
        }

        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object;

            console.log("✅ Sucesso no pagamento:", paymentIntent.id);

            const order = await Order.findOne({ paymentIntentId: paymentIntent.id });
            if (order) {
                order.status = 'paid';
                await order.save();
                console.log("📦 Pedido atualizado para 'paid':", order._id);
            } else {
                console.log("⚠️ Nenhum pedido encontrado com esse paymentIntentId:", paymentIntent.id);
            }
        }

        if (event.type === 'payment_intent.payment_failed') {
            const paymentIntent = event.data.object;

            console.log("❌ Falha no pagamento:", paymentIntent.id);

            const order = await Order.findOne({ paymentIntentId: paymentIntent.id });
            if (order) {
                order.status = 'failed';
                await order.save();
                console.log("📦 Pedido atualizado para 'failed':", order._id);
            } else {
                console.log("⚠️ Nenhum pedido encontrado com esse paymentIntentId:", paymentIntent.id);
            }
        }

        res.json({ received: true });
    } catch (err) {
        console.error('🚨 webhook error:', err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
};
