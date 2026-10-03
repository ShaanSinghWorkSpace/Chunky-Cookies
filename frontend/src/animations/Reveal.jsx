import { motion } from "framer-motion";

function Reveal({
  children,
  variant = "fadeUp",
  className = "",
  delay = 0,
  amount = 0.2,
}) {
  const variants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 30,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },

    fadeLeft: {
      hidden: {
        opacity: 0,
        x: 35,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    fadeRight: {
      hidden: {
        opacity: 0,
        x: -35,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: 0.94,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;