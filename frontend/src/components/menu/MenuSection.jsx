import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { categories, products } from "../../data/products";
import ProductCard from "./ProductCard";

import tripleChocolate from "../../assets/images/triple-chocolate.jpeg";

function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <div className="container">

        {/* Menu Introduction */}
        <motion.div
          className="menu-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="menu-intro-content">

            <div className="menu-kicker">
              <span>FRESH COOKIES</span>
              <span>MADE DAILY</span>
            </div>

            <h2>
              Our Menu<span>.</span>
            </h2>

            <p>
              Big, chunky cookies baked fresh with the good stuff.
              Pick your favourite and make your craving worth it.
            </p>
          </div>

          <div className="menu-intro-visual">

            <div className="menu-visual-circle">
              <span>BAKED</span>
              <strong>FRESH</strong>
              <span>DAILY</span>
            </div>

            <div className="menu-visual-label">
              <span>CHUNKY</span>
              <strong>Triple Chocolate</strong>
            </div>

            <div className="menu-cookie-frame">
              <img
                src={tripleChocolate}
                alt="Chunky Cookies Triple Chocolate Cookie"
              />
            </div>

            <div className="menu-doodle menu-doodle-top">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <nav
          className="menu-filter"
          aria-label="Cookie categories"
        >
          <a
            href="#non-filled"
            className="menu-filter-active"
          >
            ALL COOKIES
          </a>

          <a href="#non-filled">
            NON-FILLED
          </a>

          <a href="#filled">
            FILLED
          </a>

          <a href="#monthly">
            MONTHLY
          </a>

          <span className="menu-filter-sort">
            FRESHLY BAKED
          </span>
        </nav>

        {/* Product Categories */}
        <div className="menu-categories">

          {categories.map((category, categoryIndex) => {
            const categoryProducts = products.filter(
              (product) => product.category === category.id
            );

            return (
              <motion.section
                className="menu-category"
                id={category.id}
                key={category.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="category-heading">

                  <div>
                    <span>
                      {categoryIndex === 0
                        ? "THE CLASSICS"
                        : categoryIndex === 1
                        ? "FILLED WITH GOODNESS"
                        : "SPECIAL DROP"}
                    </span>

                    <h3>{category.name}</h3>
                  </div>

                  <strong>
                    ₹{category.price}
                  </strong>

                </div>

                <div className="product-grid">
                  {categoryProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}

        </div>

        {/* Bottom Promo */}
        <motion.div
          className="menu-promo"
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="menu-promo-content">

            <span>CAN'T DECIDE?</span>

            <h3>
              Pick your favourites<span>.</span>
            </h3>

            <p>
              Add your favourite cookies to your cart
              and build your perfect order.
            </p>

          </div>

          <a
            href="#menu"
            className="menu-promo-button"
          >
            <span>START ORDERING</span>

            <span className="menu-promo-icon">
              <FiArrowUpRight />
            </span>
          </a>

          <div className="menu-promo-doodle">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default MenuSection;