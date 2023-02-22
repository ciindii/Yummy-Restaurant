import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import path from "path";
//get access from our .env file
dotenv.config();
connectDB();
const app = express();

//error middleware, overwrite default error handler
app.use((err, req, res, next) => {
  //for when we get a 200 response even though its an error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //set response to whatever that status is
  res.status(statusCode);
  res.json({
    message: err.message,
  });
});

//allow us to accept JSON data in the body
app.use(express.json());

//so .png icon would load from public folder
app.use(express.static("public"));

//will automaticlly go to productRoutes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

//load html file
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  //get all routes thats not our api, point it to static folder
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
