import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { useCart } from "../../context/CartContext";

function ProductCard({ product, index = 0 }) {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartItem = cart.find(
    (item) => item.id === product.id
  );

  return (
    <motion.article
      className="product-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
    >
      <div className="product-image">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-placeholder">
            <span>IMAGE</span>
            <strong>COMING SOON</strong>
          </div>
        )}

      </div>

      <div className="product-info">

        <div className="product-details">

          <h4>{product.name}</h4>

          {product.description && (
            <p>{product.description}</p>
          )}

        </div>

        <div className="product-footer">

          <span className="product-price">
            ₹{product.price}
          </span>

          {cartItem ? (
            <div className="quantity-control">

              <button
                type="button"
                onClick={() =>
                  decreaseQuantity(product.id)
                }
                aria-label={`Decrease ${product.name} quantity`}
              >
                −
              </button>

              <span>{cartItem.quantity}</span>

              <button
                type="button"
                onClick={() =>
                  increaseQuantity(product.id)
                }
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </button>

            </div>
          ) : (
            <motion.button
              type="button"
              className="add-button"
              onClick={() => addToCart(product)}
              disabled={!product.available}
              whileHover={{
                scale: product.available ? 1.02 : 1,
              }}
              whileTap={{
                scale: product.available ? 0.97 : 1,
              }}
            >
              <span>
                {product.available
                  ? "ADD TO CART"
                  : "UNAVAILABLE"}
              </span>

              {product.available && (
                <span className="add-button-icon">
                  <FiArrowUpRight />
                </span>
              )}
            </motion.button>
          )}

        </div>

      </div>
    </motion.article>
  );
}

export default ProductCard;