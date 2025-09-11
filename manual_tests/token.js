// generateToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Substitua pelo _id do usuário criado
const userId = '68bbbf555afa8a43536d9301';

const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

console.log('Token JWT do usuário de teste:');
console.log(token);
