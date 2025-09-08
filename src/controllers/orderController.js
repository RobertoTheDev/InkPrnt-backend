const Order = require('../models/Order');
const File = require('../models/File');

// Criar um pedido
exports.createOrder = async (req, res) => {
  try {
    const { files } = req.body;

    if (!files || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ error: 'Nenhum arquivo selecionado para o pedido' });
    }

    const fileDocs = await File.find({ _id: { $in: files }, user: req.user.id });
    if(fileDocs.length !== files.length) {
        return res.status(400).json({ error: 'Alguns arquivos não foram encontrados'})
    }

    const totalPrice = fileDocs.reduce((acc, file) => acc + file.price, 0);

    const order = await Order.create({
      user: req.user.id,
      files,
      totalPrice,
      status: 'pendente',
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
