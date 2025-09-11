// checkOrders.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('../src/models/Order');

dotenv.config();

async function main() {
  await mongoose.connect(process.env.DB_URI);
  const orders = await Order.find().lean();
  console.log(orders);
  process.exit();
}

main().catch(err => console.error(err));
