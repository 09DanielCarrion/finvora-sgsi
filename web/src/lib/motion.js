export const pageVariants = {
  initial: { opacity: 0, x: 8 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.15, ease: [0.4, 0, 1, 1] } },
};

export const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.04 } },
};

export const cardVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
};
