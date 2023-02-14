import mongoose from "mongoose";

//That means that all the fields will be saved in the database, even if some of them are not specified in the Schema model
mongoose.set("strictQuery", false);

//use async because it returns a promise
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    //exit with failure
    process.exit(1);
  }
};

export default connectDB;
