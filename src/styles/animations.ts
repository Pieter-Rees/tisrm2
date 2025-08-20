/**
 * Animation styles and configurations
 */

import type { Variants } from 'framer-motion';

// Base animation variants
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  } satisfies Variants,

  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  } satisfies Variants,

  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  } satisfies Variants,

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  } satisfies Variants,

  scaleInRotate: {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  } satisfies Variants,

  // Slide animations
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  } satisfies Variants,

  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  } satisfies Variants,

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } satisfies Variants,

  // Page animations
  pageTransition: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  } satisfies Variants,
} as const;

// Animation configurations
export const animationConfig = {
  // Transition presets
  transitions: {
    fast: { duration: 0.15, ease: 'easeOut' },
    normal: { duration: 0.25, ease: 'easeOut' },
    slow: { duration: 0.35, ease: 'easeOut' },
    spring: { type: 'spring', stiffness: 300, damping: 30 },
    bounce: { type: 'spring', stiffness: 400, damping: 10 },
  },

  // Stagger configurations
  stagger: {
    fast: { staggerChildren: 0.05 },
    normal: { staggerChildren: 0.1 },
    slow: { staggerChildren: 0.2 },
  },

  // Hover animations
  hover: {
    scale: { scale: 1.05 },
    lift: { y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
    rotate: { rotate: 2 },
    glow: { 
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.2 },
    },
  },

  // Focus animations
  focus: {
    ring: {
      outline: '2px solid',
      outlineColor: 'blue.500',
      outlineOffset: '2px',
    },
  },
} as const;

// Utility functions for animations
export const createStaggerDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

export const createAnimationWithDelay = (
  variant: keyof typeof animationVariants,
  delay = 0
) => ({
  ...animationVariants[variant],
  visible: {
    ...animationVariants[variant].visible,
    transition: {
      ...((animationVariants[variant].visible as any)?.transition || {}),
      delay,
    },
  },
});

// Responsive animation helpers
export const responsiveAnimations = {
  // Reduce motion for accessibility
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  
  // Mobile-optimized animations
  mobile: {
    fadeInUp: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  },
} as const;
