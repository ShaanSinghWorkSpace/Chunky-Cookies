import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiCheck,
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiHome,
  FiNavigation,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

function Checkout({ onClose }) {
  const {
    cart,
    cartSubtotal,
    deliveryFee,
    orderTotal,
    clearCart,
  } = useCart();

  const [orderState, setOrderState] = useState("form");
  const [orderNumber, setOrderNumber] = useState("");

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    landmark: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomerDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderState("processing");

    setTimeout(() => {
      const generatedOrderNumber = `CC${Math.floor(
        1000 + Math.random() * 9000
      )}`;

      setOrderNumber(generatedOrderNumber);
      setOrderState("confirmed");
      clearCart();
    }, 1500);
  };

  if (orderState === "processing") {
    return (
      <div className="checkout-overlay">
        <motion.div
          className="checkout-processing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="processing-cookie"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </motion.div>

          <p className="checkout-status-label">
            CHUNKY COOKIES
          </p>

          <h2>Placing Your Order<span>.</span></h2>

          <p>
            We're getting everything ready for you.
          </p>

          <div className="processing-line">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (orderState === "confirmed") {
    return (
      <div className="checkout-overlay">
        <motion.div
          className="order-confirmation"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="confirmation-doodle confirmation-doodle-left">
            <span />
            <span />
            <span />
          </div>

          <div className="confirmation-doodle confirmation-doodle-right">
            <span />
            <span />
            <span />
          </div>

          <div className="confirmation-check">
            <FiCheck />
          </div>

          <p className="confirmation-label">
            ORDER PLACED
          </p>

          <h1>
            You're all set<span>.</span>
          </h1>

          <p className="confirmation-message">
            Your Chunky Cookies order has been received.
            <br />
            We'll get those cookies ready for you.
          </p>

          <div className="confirmation-order-card">
            <div className="confirmation-order-top">
              <div>
                <span>ORDER NUMBER</span>
                <strong>#{orderNumber}</strong>
              </div>

              <div className="confirmation-order-icon">
                <FiShoppingBag />
              </div>
            </div>

            <div className="confirmation-order-divider" />

            <div className="confirmation-order-details">
              <div>
                <span>Customer</span>
                <strong>{customerDetails.name}</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>{customerDetails.city}</strong>
              </div>

              <div>
                <span>Total</span>
                <strong>₹{orderTotal}</strong>
              </div>
            </div>
          </div>

          <div className="confirmation-note">
            <FiCheck />
            <span>Your order has been successfully placed.</span>
          </div>

          <button
            type="button"
            className="confirmation-button"
            onClick={onClose}
          >
            <span>Continue Shopping</span>
            <FiArrowRight />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="checkout-overlay">
      <div className="checkout-page">

        <motion.header
          className="checkout-header"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            className="checkout-back"
            onClick={onClose}
          >
            <FiArrowLeft />
            <span>Back to Cart</span>
          </button>

          <div className="checkout-title">
            <p>CHECKOUT</p>
            <h1>
              Complete Your Order<span>.</span>
            </h1>
          </div>

          <div className="checkout-header-badge">
            <FiShoppingBag />
            <span>{cart.length} items</span>
          </div>
        </motion.header>

        <form
          className="checkout-content"
          onSubmit={handleSubmit}
        >
          <motion.div
            className="checkout-form-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <section className="checkout-section">
              <div className="checkout-section-heading">
                <div className="checkout-section-number">
                  01
                </div>

                <div>
                  <p>YOUR DETAILS</p>
                  <h2>Who's ordering?</h2>
                </div>
              </div>

              <div className="checkout-form-grid">

                <div className="checkout-field">
                  <label htmlFor="name">
                    <FiUser />
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={customerDetails.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">
                    <FiPhone />
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={customerDetails.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field checkout-field-full">
                  <label htmlFor="email">
                    <FiMail />
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={customerDetails.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>
            </section>

            <section className="checkout-section">
              <div className="checkout-section-heading">
                <div className="checkout-section-number">
                  02
                </div>

                <div>
                  <p>DELIVERY</p>
                  <h2>Where should we deliver?</h2>
                </div>
              </div>

              <div className="checkout-form-grid">

                <div className="checkout-field checkout-field-full">
                  <label htmlFor="address">
                    <FiHome />
                    Complete Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    placeholder="House / Flat No., Street, Area"
                    value={customerDetails.address}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">
                    <FiMapPin />
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Your city"
                    value={customerDetails.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="pincode">
                    <FiNavigation />
                    Pincode
                  </label>

                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    inputMode="numeric"
                    placeholder="Pincode"
                    value={customerDetails.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field checkout-field-full">
                  <label htmlFor="landmark">
                    <FiMapPin />
                    Landmark
                    <span>Optional</span>
                  </label>

                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    placeholder="Nearby landmark"
                    value={customerDetails.landmark}
                    onChange={handleChange}
                  />
                </div>

              </div>
            </section>

          </motion.div>

          <motion.aside
            className="checkout-summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="checkout-summary-header">
              <div>
                <p>YOUR ORDER</p>
                <h2>Order Summary</h2>
              </div>

              <span>{cart.length} products</span>
            </div>

            <div className="checkout-summary-items">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    className="checkout-summary-item"
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="checkout-summary-item-image">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      ) : (
                        <span>COOKIE</span>
                      )}
                    </div>

                    <div className="checkout-summary-item-info">
                      <h3>{item.name}</h3>

                      <p>
                        {item.quantity} × ₹{item.price}
                      </p>
                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="checkout-summary-totals">
              <div>
                <span>Subtotal</span>
                <strong>₹{cartSubtotal}</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>
                  {deliveryFee === 0
                    ? "Demo — ₹0"
                    : `₹${deliveryFee}`}
                </strong>
              </div>

              <p>
                Delivery charges are currently shown as a
                demo.
              </p>

              <div className="checkout-total">
                <span>Total</span>
                <strong>₹{orderTotal}</strong>
              </div>
            </div>

            <button
              type="submit"
              className="place-order-button"
              disabled={cart.length === 0}
            >
              <span>PLACE ORDER</span>
              <FiArrowRight />
            </button>

            <div className="checkout-demo-note">
              Demo checkout — no payment will be processed.
            </div>
          </motion.aside>
        </form>
      </div>
    </div>
  );
}

export default Checkout;