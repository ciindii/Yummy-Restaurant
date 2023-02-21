import asyncHandler from "express-async-handler";
import express from "express";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
const router = express.Router();

//validate the token
const protectRoute = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //grabs only the token (dont need "Bearer")
      token = req.headers.authorization.split(" ")[1];
      //verify
      const decrypt = jwt.verify(token, process.env.JWT_SRT);
      //get user id. leave out the password. only need  the id.
      req.user = await User.findById(decrypt.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//Create order
//POST /api/orders - private
router.route("/").post(
  protectRoute,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      deliveryAddress,
      paymentMethod,
      tax,
      deliveryFee,
      total,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
    } else {
      let user = req.user._id;
      const order = new Order({
        orderItems,
        user,
        deliveryAddress,
        paymentMethod,
        tax,
        deliveryFee,
        total,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);
export default router;
