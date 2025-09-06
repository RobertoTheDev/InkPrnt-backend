const mongoose = require('mongoose');
const { required } = require('yargs');

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items : [{ type: String, required: true}],
    totalPrice: {type: Number, required: true},
    status:{type: String, enum: ['pending', 'paid', 'shipped'], default: 'pending'},
}, { timestamps: true});

module.exports = mongoose.model('Order', orderSchema);