// src/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Fluxo de pagamentos com Stripe
 */

/**
 * @swagger
 * /api/payments/checkout:
 *   post:
 *     summary: Criar um PaymentIntent no Stripe para um pedido
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *             example:
 *               orderId: "64df2f10a5e123456789abcd"
 *     responses:
 *       201:
 *         description: PaymentIntent criado com sucesso
 */

// Todos os endpoints de pagamento requerem autenticação
router.use(auth);

// POST /api/payments/checkout → criar PaymentIntent para um pedido
router.post('/checkout', checkout);

module.exports = router;
