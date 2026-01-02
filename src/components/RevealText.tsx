import React, { useEffect, useState } from 'react';
import { RevealProps } from '../types';

export const RevealText: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-[1500ms] ease-out transform ${
        isVisible
          ? 'opacity-100 blur-0 translate-y-0'
          : 'opacity-0 blur-sm translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};