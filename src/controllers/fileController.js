const multer = require('multer');
const path = require('path');
const File = require('../models/File');

// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = /stl|obj|gcode/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.test(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de arquivo não permitido'), false);
    }
};

const upload = multer({ storage, fileFilter });

// Middleware para upload de um arquivo
exports.uploadMiddleware = upload.single('file');

// Controller atualizado
exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhum arquivo enviado' });
        }

        const { price } = req.body;

        const file = await File.create({
            user: req.user.id,
            filename: req.file.filename,
            path: req.file.path,
            price: price || 0
        });

        res.status(201).json({ message: 'Arquivo enviado com sucesso', file });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getFiles = async (req, res) => {
    const files = await File.find({ user: req.user.id });
    res.json(files);
};
