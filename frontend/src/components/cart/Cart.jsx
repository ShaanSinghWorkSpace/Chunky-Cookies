import { useCart } from "../../context/CartContext";

function Cart({ isOpen, onClose, onCheckout }) {
  const {
    cart,
    cartItemCount,
    cartSubtotal,
    deliveryFee,
    orderTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (!isOpen) {
    return null;
  }

const handleCheckout = () => {
  onCheckout();
};

  return (
    <div className="cart-overlay">
      <div className="cart-backdrop" onClick={onClose}></div>

      <aside className="cart-panel">
        <div className="cart-header">
          <div>
            <h2>Your Cart</h2>
            <span>{cartItemCount} items</span>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>

            <button
              type="button"
              className="continue-shopping-button"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div>Cookie</div>
                    )}
                  </div>

                  <div className="cart-item-content">
                    <div className="cart-item-top">
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>₹{item.price} each</p>
                      </div>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>
                      </div>

                      <strong>
                        ₹{item.price * item.quantity}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-summary">
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

                <p className="delivery-note">
                  Delivery charges are currently shown as a
                  demo.
                </p>

                <div className="cart-total">
                  <span>Total</span>
                  <strong>₹{orderTotal}</strong>
                </div>
              </div>

              <button
                type="button"
                className="continue-shopping-button"
                onClick={onClose}
              >
                Continue Shopping
              </button>

              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;