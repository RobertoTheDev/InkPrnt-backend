const mongoose = require('mongoose');
const { required } = require('yargs');

const fileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    filename: { type: String, required: true},
    path: { type: String, required: true},
    price: { type: Number, required: true},
}, { timestamps: true});

module.exports = mongoose.model('File', fileSchema);