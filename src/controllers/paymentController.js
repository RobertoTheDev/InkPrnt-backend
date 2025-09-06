const { createPaymentIntent } = require('../services/paymentService');

exports.createPayment = async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Amount inválido' });
        }

        const paymentIntent = await createPaymentIntent(amount);
        res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error('Erro ao criar pagamento:', err.message);
        res.status(500).json({ error: err.message });
    }
};
