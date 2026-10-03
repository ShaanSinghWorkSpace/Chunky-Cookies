import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import "./styles/components/animations.css";
import "./styles/components/header.css";
import "./styles/components/hero.css";
import "./styles/components/category-navigation.css";
import "./styles/components/menu.css";
import "./styles/components/product-card.css";
import "./styles/components/cart.css";
import "./styles/components/checkout.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);