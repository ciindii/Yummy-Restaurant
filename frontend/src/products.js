import hamburger from "./icons/hamburger.png";
import donut from "./icons/donut.png";
import frenchfries from "./icons/french-fries.png";
import friedchicken from "./icons/fried-chicken.png";
import ramen from "./icons/ramen.png";
import taco from "./icons/taco.png";
import burgerCombo from "./icons/fast-food.png";

const products = [
  { name: "Burger", _id: "1", price: 200, img: hamburger, category: "entree" },
  { name: "Donut", _id: "2", price: 400, img: donut, category: "dessert" },
  {
    name: "French fries",
    _id: "3",
    price: 250,
    img: frenchfries,
    category: "side",
  },
  {
    name: "Fried chicken",
    _id: "4",
    price: 800,
    img: friedchicken,
    category: "entree",
  },
  { name: "Ramen", _id: "5", price: 325, img: ramen, category: "entree" },
  { name: "Taco", _id: "6", price: 475, img: taco, category: "entree" },
  {
    name: "Burger Combo",
    _id: "7",
    price: 775,
    img: burgerCombo,
    category: "entree",
  },
];

export default products;
