const mongoose = require('mongoose');
const { required } = require('yargs');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }], // <-- arquivos comprados
  totalPrice: { type: Number, required: true },
  status: {
    type: String, enum: ['pendente', 'pago', 'em produção', 'concluído'],
    default: 'pendente',
  },
  paymentIntentId: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);