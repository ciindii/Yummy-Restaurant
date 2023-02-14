import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

//so .png icon would load from public folder
app.use(express.static("public"));

//routes to get all products:
app.get("/api/products", (req, res) => {
  res.json(products);
});

//route to get product by id:
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
