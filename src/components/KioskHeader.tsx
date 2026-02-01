import React from 'react';
import { RotateCcw } from 'lucide-react';

interface KioskHeaderProps {
  onReset: () => void;
}

export const KioskHeader: React.FC<KioskHeaderProps> = ({ onReset }) => {
  return (
    <header className="bg-[#1b4d3e] text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        {/* Placeholder for Logo - using text if image fails or for speed */}
        <div className="flex flex-col">
          <h1 className="font-montserrat font-bold text-xl tracking-wide uppercase">Private Fairway</h1>
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase">Member Support Kiosk</span>
        </div>
      </div>

      <button 
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 bg-[#c5a059] text-[#1b4d3e] rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-md active:scale-95"
      >
        <RotateCcw size={16} />
        Reset Session
      </button>
    </header>
  );
};
