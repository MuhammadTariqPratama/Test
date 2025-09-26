const express = require("express");
const router = express.Router();
const produkController = require("../controllers/produkController");
const verifyToken = require("../middlewares/authJWT");

router.get("/", produkController.getAll);
router.post("/", verifyToken, produkController.create);

module.exports = router;
