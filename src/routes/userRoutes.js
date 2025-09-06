const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/', (req, res) => {
  res.send('Rota de usuários funcionando!');
});

module.exports = router;
