// src/config/theme.js

export const colors = {
  greenBright: '#44b51e',
  greenLight: '#83de22',
  blueDeep: '#0453d8',
  greenNeon: '#05ee2a',
  cyan: '#35cbe0',
  greenSoft: '#b7e26c',
  blueMedium: '#168cdb',
  greenDark: '#146217',
  cream: '#deedc8',
}

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.blueDeep}, ${colors.cyan})`,
  secondary: `linear-gradient(135deg, ${colors.greenBright}, ${colors.greenLight})`,
  accent: `linear-gradient(135deg, ${colors.greenNeon}, ${colors.cyan})`,
  cta: `linear-gradient(135deg, ${colors.greenBright}, ${colors.greenNeon})`,
}

export const brand = {
  name: 'Nexora',
  background: '#ffffff', // সলিড সাদা ব্যাকগ্রাউন্ড
  text: '#1a1a1a',
}