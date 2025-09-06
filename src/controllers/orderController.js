const Order = require('../models/Order');

// Criar um pedido
exports.createOrder = async (req, res) => {
  try {
    const { files, totalPrice } = req.body;

    if (!files || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ error: 'Nenhum arquivo selecionado para o pedido' });
    }

    const order = await Order.create({
      user: req.user.id,
      files,
      totalPrice
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Buscar todos os pedidos do usuário
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('files');
    res.json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
