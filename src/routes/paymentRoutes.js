// src/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

// Todos os endpoints de pagamento requerem autenticação
router.use(auth);

// POST /api/payments/checkout → criar PaymentIntent para um pedido
router.post('/checkout', checkout);

module.exports = router;
