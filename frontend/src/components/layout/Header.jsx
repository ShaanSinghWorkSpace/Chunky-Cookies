import { motion } from "framer-motion";
import {
  FiChevronDown,
  FiMapPin,
  FiMenu,
  FiShoppingBag,
} from "react-icons/fi";

import logo from "../../assets/logo/chunky-cookies-header-logo.png";

import {
  fadeDown,
  fadeLeft,
  fadeRight,
} from "../../animations/variants";

function Header({ onCartClick, cartItemCount }) {
  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={fadeDown}
    >
      <div className="container">
        <div className="header-bar">
          {/* Menu */}
          <motion.a
            href="#menu"
            className="header-menu"
            variants={fadeRight}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiMenu />

            <span>Menu</span>
          </motion.a>

          {/* Center Logo */}
          <motion.a
            href="/"
            className="header-logo"
            aria-label="Chunky Cookies home"
            variants={fadeDown}
            whileHover={{
              rotate: -2,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <img
              src={logo}
              alt="Chunky Cookies"
            />
          </motion.a>

          {/* Right Actions */}
          <motion.div
            className="header-actions"
            variants={fadeLeft}
          >
            {/* Location */}
            <div className="header-location">
              <span className="header-location-icon">
                <FiMapPin />
              </span>

              <div className="header-location-text">
                <span>Delivering in</span>
                <strong>TRICITY</strong>
              </div>

              <FiChevronDown className="header-location-arrow" />
            </div>

            {/* Cart */}
            <motion.button
              type="button"
              className="header-cart"
              onClick={onCartClick}
              aria-label={`Open cart with ${cartItemCount} items`}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <FiShoppingBag />

              <span className="header-cart-text">
                CART
              </span>

              <motion.span
                className="header-cart-count"
                key={cartItemCount}
                initial={{
                  scale: 0.7,
                  opacity: 0.5,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                {cartItemCount}
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;