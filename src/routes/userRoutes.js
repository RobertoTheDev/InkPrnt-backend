const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários e autenticação
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: "João da Silva"
 *               email: "joao@email.com"
 *               password: "123456"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Autenticar usuário e gerar token JWT
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "joao@email.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

router.post('/register', register);
router.post('/login', login);

module.exports = router;
