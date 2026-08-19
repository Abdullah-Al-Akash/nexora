// src/components/ui/Card.jsx

const Card = ({ 
  children, 
  className = '', 
  gradient = false,
  ...props 
}) => {
  const baseStyles = 'p-6 rounded-2xl transition-all duration-300'
  const gradientStyles = gradient 
    ? 'gradient-btn text-white' 
    : 'card-bg'

  return (
    <div
      className={`${baseStyles} ${gradientStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card