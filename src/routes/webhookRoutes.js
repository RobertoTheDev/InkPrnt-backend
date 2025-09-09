// src/routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const { stripeWebhook } = require('../controllers/webhookController');

// Corrigido: 'application/json'
router.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhook);

module.exports = router;
