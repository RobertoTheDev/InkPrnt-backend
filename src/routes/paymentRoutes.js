const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.use(auth); // só usuários autenticados podem pagar
router.post('/checkout', checkout);

module.exports = router;
