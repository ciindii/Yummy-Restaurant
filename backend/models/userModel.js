import mongoose from "mongoose";

//user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: True,
      default: false,
    },
  },
  {
    //pass in second argument of options. create timestamp automatically
    timestamps: true,
  }
);

//create a modelf from this schema
const User = mongoose.model("User", userSchema);
export default User;
