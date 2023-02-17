import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import router from "./productRoutes.js";

//get user and token
//POST /api/users/login - public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //find by email that matches email from request body
    const user = await User.findOne({ email: email });
    //check if password matches with email in database

    //check if user exisits
  })
);
export default router;
