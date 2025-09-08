// src/controllers/paymentController.js
const { createPaymentIntent } = require('../services/paymentService');
const Order = require('../models/Order');

exports.checkout = async (req, res) => {
    try {
        const { orderId } = req.body; // agora recebemos só o ID do pedido

        const order = await Order.findOne({ _id: orderId, user: req.user.id });
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }

        // Criar PaymentIntent com o preço do pedido
        const paymentIntent = await createPaymentIntent(order.totalPrice);

        // Salvar o ID do PaymentIntent no pedido
        order.paymentIntentId = paymentIntent.id;
        await order.save();

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
