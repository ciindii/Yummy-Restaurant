import mongoose from "mongoose";

//user schema
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //adds a relationship between the product and user
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    //pass in second argument of options. create timestamp automatically
    timestamps: true,
  }
);

//create a modelf from this schema
const Product = mongoose.model("Product", productSchema);
export default Product;
