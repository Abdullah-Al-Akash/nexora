// src/components/ui/Input.jsx

const Input = ({ 
  label, 
  type = 'text', 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-laserBlue focus:border-transparent transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input