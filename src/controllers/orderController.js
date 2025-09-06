const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { items, totalPrice } = req.body;
        const order = await Order.create({ user: req.user.id, items, totalPrice });
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
};