const mongoose = require('mongoose');
const argon2 = require('argon2');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

// Hash da senha antes de salvar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await argon2.hash(this.password);
    next();
});

// Comparar senha durante o login
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await argon2.verify(this.password, candidatePassword);
};

module.exports = mongoose.model('User', userSchema);
