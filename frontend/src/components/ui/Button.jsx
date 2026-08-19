// src/components/ui/Button.jsx

import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center'
  
  const variants = {
    primary: 'text-white bg-gradient-to-r from-greenNeon via-cyan to-blueDeep hover:shadow-lg hover:shadow-cyan/20 hover:scale-105 focus:ring-cyan',
    secondary: 'text-white bg-gradient-to-r from-greenBright to-greenLight hover:shadow-lg hover:shadow-greenBright/20 hover:scale-105 focus:ring-greenBright',
    outline: 'border-2 border-blueDeep text-blueDeep hover:bg-gradient-to-r hover:from-greenNeon hover:via-cyan hover:to-blueDeep hover:text-white hover:border-transparent hover:scale-105 focus:ring-cyan',
    ghost: 'text-blueDeep hover:gradient-text focus:ring-cyan',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button