import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//everytime you uses a mongoose method it returns a promise
//instead of doing a try catch for every route => express-async-handler

const router = express.Router();

//so .png icon would load from public folder
router.use(express.static("public"));

//GET all products, public:
//GET /api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    //set products to the Product model and use the find method and pass in empty object to give us everything.
    const products = await Product.find({});
    res.json(products);
  })
);

//GET product by id, public:
//GET /api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  })
);

export default router;
