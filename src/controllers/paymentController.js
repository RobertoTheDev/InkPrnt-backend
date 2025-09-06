const { createPaymentIntent } = require('../services/paymentService');

exports.checkout = async (req, res) => {
    console.log('REQ.BODY:', req.body);
    console.log('REQ.USER:', req.user);
    try {
        console.log('Body recebido:', req.body); // <--- isso mostra o que chega
        const { amount } = req.body; // valor em centavos
        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Valor inválido para pagamento' });
        }

        const paymentIntent = await createPaymentIntent(amount);

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};