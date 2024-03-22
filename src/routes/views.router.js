const express = require("express");
const router = express.Router();
const ProductManager = require("../controllers/product-manager.js");
const productManager = new ProductManager("./src/models/productos.json");
router.get("/", async (req, res) => {
  try {
    const productos = await productManager.getProducts();
    res.render("home", { productos: productos });
  } catch (error) {
    console.log("no se pueden obtener los productos", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
router.get("/realtimeproducts", async (req, res) => {
  try {
    res.render("realtimeproducts");
  } catch (error) {
    console.log("error al mostrar los prodcutos online", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
module.exports = router;
