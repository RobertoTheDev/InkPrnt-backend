const express = require('express');
const router = express.Router();
const { uploadFile, getFiles, uploadMiddleware } = require('../controllers/fileController');
const auth = require('../middleware/auth');

router.use(auth);
router.post('/', uploadMiddleware, uploadFile); // <-- middleware do Multer adicionado
router.get('/', getFiles);

module.exports = router;
