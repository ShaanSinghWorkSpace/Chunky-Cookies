export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const fastTransition = {
  duration: 0.25,
  ease: "easeOut",
};

export const slowTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
};

export const softSpring = {
  type: "spring",
  stiffness: 180,
  damping: 20,
};