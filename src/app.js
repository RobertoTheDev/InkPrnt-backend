const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const setupSwagger = require('./config/swagger');

// Rotas
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const fileRoutes = require('./routes/fileRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

// Middlewares globais
app.use(cors());
app.use(helmet());
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);

// Rotas de webhook (usa raw body)
app.use('/api/webhooks', webhookRoutes);

// Middlewares para JSON normalmente
app.use(express.json());

// Rotas normais
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
