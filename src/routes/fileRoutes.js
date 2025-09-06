const express = require('express');
const router = express.Router();
const { uploadFile, getFiles } = require('../controllers/fileController');
const auth = require('../middleware/auth');

router.use(auth);
router.post('/', uploadFile);
router.get('/', getFiles);

module.exports = router;
