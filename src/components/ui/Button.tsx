'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 via-pink-550 to-pink-600 text-white shadow-md shadow-pink-500/20 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-pink-50 text-pink-700 hover:bg-pink-100 hover:text-pink-800 hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50 hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-gray-600 hover:bg-gray-50 hover:text-pink-600 active:scale-[0.97]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
