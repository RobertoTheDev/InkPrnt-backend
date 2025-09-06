const mongoose = require('mongoose');
const bcrypt = require('argon2');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'}, }, {timestamps: true});

// Hash das Senhas antes de Salvar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password);
    next();
});

//Comparação de Senhas
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.verify(this.password, this.password);
};

module.exports = mongoose.model('User', userSchema);