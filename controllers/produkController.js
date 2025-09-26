const Produk = require("../models/produk");

exports.getAll = async (req, res) => {
  const produk = await Produk.findAll();
  res.json(produk);
};

exports.create = async (req, res) => {
  const { nama, harga } = req.body;
  const produk = await Produk.create({ nama, harga });
  res.json({ message: "Produk ditambahkan", produk });
};
