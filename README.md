# 🖨️ API inkPrnt - Node.js + Express + MongoDB + Stripe

API para gerenciamento de pedidos de impressão 3D, com upload de arquivos, cálculo de preços, pagamentos via **Stripe**, **autenticação JWT** e documentação via **Swagger**.
Desenvolvida com **Node.js 22.x**, **Express 4.x** e **MongoDB 7.x.**
O foco deste projeto é exclusivamente back-end, já funcional e estruturado para ser consumido por um front-end (**React**, **Next.js**, etc).

## 📌 Ajustes e melhorias

O projeto já  ainda está em desenvolvimento e as próximas atualizações serão voltadas para:

- [x] CRUD de usuários

- [x] CRUD de arquivos para impressão

- [x] CRUD de pedidos com cálculo automático de preço

- [x] Integração de pagamentos com Stripe (PaymentIntent + Webhooks)

- [x] Controle de acesso com JWT

- [x] Documentação inicial com Swagger

- [] Testes automatizados (Jest/Supertest)

- [] Melhoria nos logs e monitoramento

- [] Deploy em produção (Railway/Render/Heroku)

## ✅ O que já foi feito

**Usuários**

- Registro, login e autenticação com JWT

- Rotas protegidas para recursos sensíveis

**Arquivos**

- Upload e gerenciamento de arquivos STL/3D

- Cálculo de preço por arquivo

**Pedidos**

- Criação de pedidos a partir de arquivos

- Atribuição automática de totalPrice

- Associação com PaymentIntent no Stripe

- Atualização de status via webhooks do Stripe

**Pagamentos**

- Criação de PaymentIntent

- Atualização de pedido automaticamente ao receber payment_intent.succeeded

**Swagger**

- Documentação inicial da API em /api-docs

## 📖 Documentação Swagger
A documentação interativa está disponível em:

👉 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

## 💻 Pré-requisitos

Antes de começar, verifique se você possui instalado:

- **Node.js 22.x**

- **npm 9.x**

- Banco de dados **MongoDB** rodando localmente ou em **cloud (Atlas)**

- **Conta de testes no Stripe** (com secret key e webhook configurado)

## 🚀 Instalando API InkPrnt

**1. Clone o repositório:**

```bash
git clone https://github.com/RobertoTheDev/api-inkprnt.git
cd api-inkprnt/backend
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure o .env:**
```bash
PORT=5000
DB_URI=mongodb://localhost:27017/inkprnt
JWT_SECRET=sua_chave_jwt
STRIPE_SECRET_KEY=sua_stripe_secret_key
STRIPE_WEBHOOK_SECRET=sua_webhook_secret
```

**4. Rode em modo desenvolvimento:**
```bash
npm run dev
```

A API estará disponível em:
👉 **http://localhost:5000**

````pgsql
📂 Estrutura do Projeto
backend/
├── src/
│   ├── controllers/       # Lógica dos endpoints
│   │   ├── userController.js
│   │   ├── fileController.js
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   └── webhookController.js
│   │
│   ├── models/            # Schemas do Mongoose
│   │   ├── User.js
│   │   ├── File.js
│   │   └── Order.js
│   │
│   ├── routes/            # Rotas da API
│   │   ├── userRoutes.js
│   │   ├── fileRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── webhookRoutes.js
│   │
│   ├── services/          # Integrações externas
│   │   └── paymentService.js
│   │
│   ├── config/            # Configurações
│   │   ├── swagger.js
│   │   └── db.js
│   │
│   └── app.js             # Inicialização do Express
│
├── .env                   # Variáveis de ambiente
├── .gitignore
├── package.json
├── nodemon.json
└── README.md
````


## 🛠 Tecnologias utilizadas
- **Node.js 22.x**

- **Express 4.x**

- **MongoDB 7.x**

- **Mongoose** para modelagem de dados

- **Stripe** para pagamentos online

- **JW** para autenticação

- **Swagger** para documentação

- **Multer** para upload de arquivos

## 📦 Bibliotecas principais

- **express** – Servidor HTTP

- **mongoose** – ODM para MongoDB

- **jsonwebtoken** – Autenticação JWT

- **bcryptjs** – Criptografia de senhas

- **multer** – Upload de arquivos

- **stripe** – Integração com Stripe

- **swagger-jsdoc** + **swagger-ui-express** – Documentação da API

- **dotenv** – Variáveis de ambiente

- **nodemon** – Hot reload no desenvolvimento

## 📄 Licença
Este projeto está licenciado sob a [MIT License](./LICENSE).
