import asyncHandler from "express-async-handler";
import express from "express";
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

//get user and token
//POST /api/users/login - public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    //generate JWT
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SRT, {
        expiresIn: "30d",
      });
    };
    const { email, password } = req.body;
    //check if user exisits, find by email that matches email from request body
    const user = await User.findOne({ email: email });
    //check if password matches with email in database
    if (user && (await user.isMatchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Email or password is invaild, please try agian");
    }
  })
);

//create new user
//POST /api/users - public
router.route("/").post(
  asyncHandler(async (req, res) => {
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SRT, {
        expiresIn: "30d",
      });
    };

    const { name, email, password } = req.body;
    //check if user exists, find by email that matches email from request body
    const user = await User.findOne({ email: email });
    //if user already exist in db:
    if (user) {
      res.status(400);
      throw new Error("This user already exists");
    }
    //password will have bcyrpt applied though userModel method
    const newUser = await User.create({
      name,
      email,
      password,
    });

    //when successfully create new user:
    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error(
        "Oof. Looks like user data is invalid. Please check and try agian! "
      );
    }
  })
);

//get user account
//GET /api/users/account - private
router.route("/account").get(
  //protectRoute func will run everytime /account route is hit
  protectRoute,
  asyncHandler(async (req, res) => {
    //generate JWT
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SRT, {
        expiresIn: "30d",
      });
    };

    //data from token have user._id, fetch user with that id in protectRoute and assign to user w/ req.user._id

    //check if user exisits, find by email that matches email from request body
    const user = await User.findById(req.user._id);
    //check if password matches with email in database
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("Email or password is invaild, please try agian");
    }
  })
);
export default router;
