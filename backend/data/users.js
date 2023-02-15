import bcrypt from "bcryptjs";
//use hash sync method, it will hash the password synchronously
const users = [
  {
    name: "ADMIN",
    email: "admin@yummyrestaurant.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Naruto",
    email: "naruto@kohona.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Sasuke",
    email: "sasuke@kohona.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
