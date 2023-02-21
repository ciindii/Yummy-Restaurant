import mongoose from "mongoose";

//order schema
const orderSchema = mongoose.Schema(
  {
    //user that is connected to this schema is the user that buy the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    orderItems: [
      {
        //name of product
        name: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          //link to product model
          ref: "Product",
        },
      },
    ],
    deliveryAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    deliveryFee: {
      type: Number,
      required: true,
      default: 0.0,
    },
    total: {
      type: Number,
      required: true,
      default: 0.0,
    },
    tax: {
      type: Number,
      required: true,
      default: 0.0,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    //pass in second argument of options. create timestamp automatically
    timestamps: true,
  }
);

//create a modelf from this schema
const Order = mongoose.model("Order", orderSchema);
export default Order;
