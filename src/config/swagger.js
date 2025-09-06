const { title } = require('process');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'InkPrnt API',
            version: '1.0.0',
            description: 'API do e-comerce de impressão 3d InkPrnt',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis:['./src/routes/*.js', './src/controllers/*.js'],
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = setupSwagger;