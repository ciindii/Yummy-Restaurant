import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const deleteData = async () => {
  try {
    //delete everything, dont want to import with data already in the db
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    //delete everything, dont want to import with data already in the db
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //
    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: admin };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

//[2] will be whatever is passed in
if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
