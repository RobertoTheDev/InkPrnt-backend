const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gerenciamento de pedidos de impressão 3D
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Listar pedidos do usuário autenticado
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos do usuário
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               files: ["fileId1", "fileId2"]
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */

router.use(auth); // só usuários autenticados podem acessar
router.post('/', createOrder);
router.get('/', getOrders);

module.exports = router;
