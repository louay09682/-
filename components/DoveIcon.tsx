
import React from 'react';

interface DoveIconProps {
  className?: string;
}

const DoveIcon: React.FC<DoveIconProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-float"
      >
        {/* Body of the Dove */}
        <path
          d="M30 50C30 40 45 30 60 35C75 40 85 55 80 70C75 85 55 90 45 80L30 85L35 70C30 65 25 55 30 50Z"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="1"
        />
        {/* Wing - Top */}
        <path
          className="wing-flap"
          d="M55 40C65 20 85 15 95 30C85 35 70 45 60 40Z"
          fill="white"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        {/* Eye */}
        <circle cx="42" cy="48" r="1.5" fill="#1E293B" />
        {/* Beak */}
        <path d="M28 52L20 54L27 57Z" fill="#F59E0B" />
        {/* Olive Branch */}
        <path
          d="M18 55C15 52 10 52 8 55M18 55C16 58 12 60 10 58"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="55" r="1" fill="#10B981" />
        <circle cx="10" cy="58" r="1" fill="#10B981" />
      </svg>
    </div>
  );
};

export default DoveIcon;
