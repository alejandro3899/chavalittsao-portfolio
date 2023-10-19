import { Variant } from "framer-motion";

export const baseTransition = { duration: 1.2, type: "spring", bounce: 0 };

export const fadeIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        ...baseTransition,
        duration,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ...baseTransition,
        duration,
        delay,
      },
    },
  };
};

export const navFadeIn = (delay = 0, duration = 0.5) => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        ...baseTransition,
        duration,
        delay,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ...baseTransition,
        duration,
      },
    },
  };
};

export const rightLeftContainer = (
  delay?: number,
  stagger?: number,
  x = 100
) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: stagger ?? 0.1,
      delayChildren: delay ?? 0,
    },
  },
});

export const rightLeft = (delay = 0, x = 100) => {
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ...baseTransition,
        duration: 0.5,
        delay,
      },
    },
    exit: {
      opacity: 0,
      x: -15,
      transition: {
        ...baseTransition,
        duration: 0.5,
        delay,
      },
    },
  };
};

export const slideIn = (
  delay = 0
): {
  [key: string]: Variant;
} => ({
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      y: {
        ease: [0.24, 0.84, 0.98, 0.98],
        duration: 0.45,
      },
      duration: 0.5,
      delay,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "linear",
      /*y: {
        ease: [0.24, 0.84, 0.98, 0.98],
        duration: 0.4,
      },*/
      opacity: {
        duration: 0.4,
      },
      delay,
    },
  },
});
