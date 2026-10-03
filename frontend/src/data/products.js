import kunafa from "../assets/images/kunafa.jpeg";
import nutella from "../assets/images/nutella.jpeg";
import tripleChocolate from "../assets/images/triple-chocolate.jpeg";
import walnutCrunch from "../assets/images/walnut-crunch.jpeg";
import blackAndWhite from "../assets/images/black-and-white.jpeg";
import redVelvet from "../assets/images/red-velvet.jpeg";

export const categories = [
  {
    id: "non-filled",
    name: "Non-Filled Cookies",
    price: 100,
  },
  {
    id: "filled",
    name: "Filled Cookies",
    price: 130,
  },
  {
    id: "monthly",
    name: "Monthly Cookie",
    price: 130,
  },
];

export const products = [
  {
    id: "choco-chunk",
    name: "Choco Chunk Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: null,
    available: true,
  },
  {
    id: "oreo",
    name: "Oreo Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: null,
    available: true,
  },
  {
    id: "double-dark",
    name: "Double Dark Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: null,
    available: true,
  },
  {
    id: "triple-chocolate",
    name: "Triple Chocolate Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: tripleChocolate,
    available: true,
  },
  {
    id: "black-and-white",
    name: "Black & White Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: blackAndWhite,
    available: true,
  },
  {
    id: "walnut-crunch",
    name: "Walnut Crunch Cookie",
    category: "non-filled",
    price: 100,
    description: "",
    image: walnutCrunch,
    available: true,
  },
  {
    id: "nutella-filled",
    name: "Nutella Filled Cookie",
    category: "filled",
    price: 130,
    description: "",
    image: nutella,
    available: true,
  },
  {
    id: "biscoff-filled",
    name: "Biscoff Filled Cookie",
    category: "filled",
    price: 130,
    description: "",
    image: null,
    available: true,
  },
  {
    id: "red-velvet-creamcheese",
    name: "Red Velvet Creamcheese Cookie",
    category: "filled",
    price: 130,
    description: "",
    image: redVelvet,
    available: true,
  },
  {
    id: "dubai-kunafa",
    name: "Dubai Kunafa Cookie",
    category: "filled",
    price: 130,
    description: "",
    image: kunafa,
    available: true,
  },
  {
    id: "monthly-cookie",
    name: "Monthly Cookie",
    category: "monthly",
    price: 130,
    description: "",
    image: null,
    available: true,
  },
];