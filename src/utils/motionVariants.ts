import { Variants } from "framer-motion";

// Respect user's motion preferences
const shouldReduceMotion = typeof window !== "undefined" 
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
  : false;

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: shouldReduceMotion ? 0 : 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.5
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    scale: shouldReduceMotion ? 1 : 0.95, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    x: shouldReduceMotion ? 0 : 100, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.3,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.1,
      delayChildren: shouldReduceMotion ? 0 : 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.4
    }
  }
};
