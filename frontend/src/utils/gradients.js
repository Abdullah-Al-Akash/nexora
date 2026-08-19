// src/utils/gradients.js

import { colors, gradients } from '../config/theme'

export const gradientClasses = {
  // ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট
  bg: {
    primary: 'bg-gradient-primary',
    hero: 'bg-gradient-hero',
    accent: 'bg-gradient-accent',
  },
  
  // টেক্সট গ্রেডিয়েন্ট
  text: {
    primary: 'gradient-text',
    hero: 'text-transparent bg-clip-text bg-gradient-hero',
    accent: 'text-transparent bg-clip-text bg-gradient-accent',
  },
  
  // বর্ডার গ্রেডিয়েন্ট
  border: {
    primary: 'border-2 border-transparent bg-gradient-primary bg-clip-padding',
    accent: 'border-2 border-transparent bg-gradient-accent bg-clip-padding',
  }
}

export const getGradient = (type = 'primary') => {
  const gradientMap = {
    primary: gradients.primary,
    secondary: gradients.secondary,
    hero: gradients.hero,
    accent: gradients.accent,
  }
  return gradientMap[type] || gradients.primary
}