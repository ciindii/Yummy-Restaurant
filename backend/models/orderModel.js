import mongoose from "mongoose";

//order schema
const orderSchema = mongoose.Schema(
  {
    //user that is connected to this schema is the user that buy the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        //name of product
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
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
      postal: { type: String, required: true },
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
      required: True,
    },
    paymentResult: {
      //sucessful payment from paypal
      id: { type: String },
      status: { type: String },
      updateTime: { type: String },
      email: { type: String },
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliverdAt: {
      type: Date,
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
