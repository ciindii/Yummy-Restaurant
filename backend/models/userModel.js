import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
      required: true,
      default: false,
    },
  },
  {
    //pass in second argument of options. create timestamp automatically
    timestamps: true,
  }
);

//methods
//compare plain text passed in to encrypted password
userSchema.methods.isMatchPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

//from mongoose middleware hash password
//https://stackoverflow.com/questions/66839427/mongoose-middleware-schema-presave
//pre -> happen before we 'save' want to run function before saving
userSchema.pre("save", async function (next) {
  const encrypt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, encrypt);
});

//create a modelf from this schema
const User = mongoose.model("User", userSchema);
export default User;
