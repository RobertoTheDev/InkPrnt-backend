// src/routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const { stripeWebhook } = require('../controllers/webhookController');


/**
 * @swagger
 * tags:
 *   name: Webhooks
 *   description: Webhooks de integração (Stripe, etc.)
 */

/**
 * @swagger
 * /api/webhooks/stripe:
 *   post:
 *     summary: Webhook do Stripe para eventos de pagamento
 *     tags: [Webhooks]
 *     responses:
 *       200:
 *         description: Evento recebido e processado
 */

// Corrigido: 'application/json'
router.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhook);

module.exports = router;
