const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./models/index");

// sync db
const User = require("./models/user");
const Produk = require("./models/produk");
sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default route
app.get("/", (req, res) => {
  res.json({ message: "API berjalan 🚀" });
});

// routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/produk", require("./routes/produkRoutes"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
