import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeart,
  FiStar,
} from "react-icons/fi";

import tripleChocolate from "../../assets/images/triple-chocolate.jpeg";
import blackAndWhite from "../../assets/images/black-and-white.jpeg";
import walnutCrunch from "../../assets/images/walnut-crunch.jpeg";
import nutella from "../../assets/images/nutella.jpeg";
import redVelvet from "../../assets/images/red-velvet.jpeg";
import kunafa from "../../assets/images/kunafa.jpeg";

import {
  fadeUp,
  heroImage,
  popIn,
  staggerContainer,
} from "../../animations/variants";

const heroCookies = [
  {
    id: "triple-chocolate",
    name: "Triple Chocolate",
    image: tripleChocolate,
  },
  {
    id: "black-and-white",
    name: "Black & White",
    image: blackAndWhite,
  },
  {
    id: "walnut-crunch",
    name: "Walnut Crunch",
    image: walnutCrunch,
  },
  {
    id: "nutella",
    name: "Nutella Filled",
    image: nutella,
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    image: redVelvet,
  },
  {
    id: "kunafa",
    name: "Dubai Kunafa",
    image: kunafa,
  },
];

function Hero() {
  const [activeCookie, setActiveCookie] = useState(0);

  const currentCookie = heroCookies[activeCookie];

  const nextCookie = () => {
    setActiveCookie(
      (current) => (current + 1) % heroCookies.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCookie(
        (current) => (current + 1) % heroCookies.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-decoration hero-decoration-cookie">
        <FiStar />
      </div>

      <div className="hero-decoration hero-decoration-star">
        <FiStar />
      </div>

      <div className="hero-decoration hero-decoration-heart">
        <FiHeart />
      </div>

      <div className="container">
        <div className="hero-content">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <motion.div
            className="hero-text"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="hero-kicker"
              variants={fadeUp}
            >
              <span>FRESHLY BAKED</span>
              <span>IN TRICITY</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Big cookies.
              <br />
              <em>Serious</em>
              <br />
              cravings.
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={fadeUp}
            >
              Thick, indulgent cookies baked for the moments
              when a regular cookie just isn't enough.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
            >
              <motion.a
                href="#menu"
                className="hero-primary-button"
                whileHover={{
                  scale: 1.02,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Order Now</span>

                <span className="hero-button-icon">
                  <FiArrowUpRight />
                </span>
              </motion.a>

              <motion.a
                href="#menu"
                className="hero-menu-link"
                whileHover={{
                  x: 4,
                }}
              >
                <span>Explore</span>

                <strong>
                  the menu
                </strong>

                <FiArrowUpRight />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* =========================
              COOKIE VISUAL
          ========================= */}

          <motion.div
            className="hero-visual"
            variants={heroImage}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              type="button"
              className="hero-photo"
              onClick={nextCookie}
              aria-label={`View next cookie. Currently showing ${currentCookie.name}`}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCookie.id}
                  src={currentCookie.image}
                  alt={`Chunky Cookies ${currentCookie.name}`}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    rotate: -2,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    rotate: 2,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>
            </motion.button>

            {/* Fresh badge */}

            <motion.div
              className="hero-photo-label"
              variants={popIn}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
            >
              <span>BAKED</span>

              <strong>
                FRESH
              </strong>

              <span>DAILY</span>
            </motion.div>

            {/* Cookie name */}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCookie.id}
                className="hero-flavour-label"
                initial={{
                  opacity: 0,
                  y: 12,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span>
                  CHUNKY
                </span>

                <strong>
                  {currentCookie.name}
                </strong>
              </motion.div>
            </AnimatePresence>

            {/* Carousel indicators */}

            <div className="hero-cookie-indicator">
              {heroCookies.map((cookie, index) => (
                <button
                  key={cookie.id}
                  type="button"
                  className={
                    index === activeCookie
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCookie(index)
                  }
                  aria-label={`Show ${cookie.name}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================
          BOTTOM FEATURES
      ========================= */}

      <div className="hero-bottom-strip">
        <div className="container">
          <div className="hero-features">

            <motion.div
              className="hero-feature"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <FiStar />

              <div>
                <strong>
                  Thick & Chunky
                </strong>

                <span>
                  Bigger bites
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-feature"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
            >
              <FiHeart />

              <div>
                <strong>
                  Made With Love
                </strong>

                <span>
                  Freshly baked
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-feature"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: 0.16,
              }}
            >
              <FiStar />

              <div>
                <strong>
                  Premium Ingredients
                </strong>

                <span>
                  Real flavours
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-feature"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: 0.24,
              }}
            >
              <FiArrowUpRight />

              <div>
                <strong>
                  Local Delivery
                </strong>

                <span>
                  Fresh to your door
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;