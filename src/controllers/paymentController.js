// src/controllers/paymentController.js
const { createPaymentIntent } = require('../services/paymentService');
const Order = require('../models/Order');

exports.checkout = async (req, res) => {
    try {
        const { orderId } = req.body; // recebemos o ID do pedido

        // Buscar pedido do usuário
        const order = await Order.findOne({ _id: orderId, user: req.user.id });
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        // Se já houver PaymentIntent, não cria outro
        if (order.paymentIntentId) {
            return res.status(200).json({
                clientSecret: order.clientSecret, // opcional
                paymentIntentId: order.paymentIntentId
            });
        }

        // Criar PaymentIntent com o valor do pedido
        const paymentIntent = await createPaymentIntent(order.totalPrice);

        // Salvar o ID do PaymentIntent no pedido
        order.paymentIntentId = paymentIntent.id;
        await order.save();

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
