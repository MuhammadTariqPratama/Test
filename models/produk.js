const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Produk = sequelize.define("Produk", {
  nama: { type: DataTypes.STRING, allowNull: false },
  harga: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Produk;
