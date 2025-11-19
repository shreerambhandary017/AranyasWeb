export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.6, 0.01, 0.05, 0.95] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const revealMask = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: 1.1, ease: [0.77, 0, 0.18, 1] }
  }
};

export const parallaxText = {
  initial: { opacity: 0, y: 80 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

// Premium scroll animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

// Premium hover animations
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

export const hoverGlow = {
  rest: { opacity: 1 },
  hover: {
    opacity: 0.9,
    transition: { duration: 0.3 }
  }
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

export const imageHover = {
  rest: { scale: 1, filter: 'brightness(1)' },
  hover: {
    scale: 1.08,
    filter: 'brightness(1.1)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

