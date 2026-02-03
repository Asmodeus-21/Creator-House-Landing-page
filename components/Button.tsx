
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth = false }) => {
  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-4 text-lg font-bold text-white rounded-lg
        bg-gradient-to-r from-brand-pink to-brand-purple
        hover:scale-105 transform transition-transform duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-brand-pink/50
        shadow-lg shadow-brand-purple/30
        animate-gradient-x
        ${widthClass}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
