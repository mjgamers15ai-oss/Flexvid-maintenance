import React from 'react';

export const AmbientLight: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {/* Primary center bloom */}
      <div 
        className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white rounded-full blur-[120px] opacity-[0.04] animate-pulse-slow"
        style={{ willChange: 'opacity' }}
      />
      
      {/* Secondary subtle gradient from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-luxury-charcoal to-transparent opacity-60" />
    </div>
  );
};