// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../src/models/User');

dotenv.config();

mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Mongo conectado'))
    .catch(err => console.log(err));

(async () => {
    try {
        const user = await User.create({
            name: 'Teste',
            email: 'teste@inkprnt.com',
            password: '123456'
        });
        console.log('Usuário criado:', user);
        process.exit();
    } catch (err) {
        console.error('Erro ao criar usuário:', err.message);
        process.exit(1);
    }
})();
