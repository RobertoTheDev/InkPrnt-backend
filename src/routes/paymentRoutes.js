const express = require('express');
const router = express.Router();
const { createPayment } = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.use(auth); // exige token JWT
router.post('/', createPayment);

module.exports = router;
