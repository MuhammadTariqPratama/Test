const { Sequelize } = require("sequelize");
const config = require("../config/config")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ Database terkoneksi"))
  .catch(err => console.error("❌ DB error:", err));

module.exports = sequelize;
