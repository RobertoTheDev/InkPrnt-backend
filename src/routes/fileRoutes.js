const express = require('express');
const router = express.Router();
const { uploadFile, getFiles, uploadMiddleware } = require('../controllers/fileController');
const auth = require('../middleware/auth');


/**
 * @swagger
 * tags:
 *   name: Files
 *   description: Upload e gerenciamento de arquivos STL
 */

/**
 * @swagger
 * /api/files:
 *   get:
 *     summary: Listar arquivos do usuário
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de arquivos
 *   post:
 *     summary: Fazer upload de um arquivo STL
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Arquivo enviado com sucesso
 */

router.use(auth);
router.post('/', uploadMiddleware, uploadFile); // <-- middleware do Multer adicionado
router.get('/', getFiles);

module.exports = router;
