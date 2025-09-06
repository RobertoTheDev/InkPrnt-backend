const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const setupSwagger = require('./config/swagger');


//Rotas (PlaceHolder)!!!! ==========
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const fileRoutes = require('./routes/fileRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();

// Middlewares Globais
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/uploads', express.static('uploads'));


setupSwagger(app);


app.get('/', (req, res) => {
    res.send('Bem-vindo a API InkPrnt!!!');
});

module.exports = app;