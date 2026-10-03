import { useState } from "react";

import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import CategoryNavigation from "./components/home/CategoryNavigation";
import MenuSection from "./components/menu/MenuSection";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

import { CartProvider, useCart } from "./context/CartContext";

function Storefront() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const { cartItemCount } = useCart();

  return (
    <>
      <Header
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItemCount}
      />

      <main>
        <Hero />
        <CategoryNavigation />
        <MenuSection />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {isCheckoutOpen && (
        <Checkout
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Storefront />
    </CartProvider>
  );
}

export default App;