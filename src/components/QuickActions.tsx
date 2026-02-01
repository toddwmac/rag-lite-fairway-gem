import React from 'react';
import { QUICK_ACTIONS } from '@/data/quickActions';

interface QuickActionsProps {
  onAction: (prompt: string) => void;
  disabled?: boolean;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onAction, disabled }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {QUICK_ACTIONS.map((action) => (
        <button
          key={action.id}
          onClick={() => onAction(action.prompt)}
          disabled={disabled}
          className="flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-[#1b4d3e]/10 rounded-2xl hover:border-[#c5a059] hover:bg-[#1b4d3e]/5 hover:scale-[1.02] transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="text-[#1b4d3e] group-hover:text-[#c5a059] transition-colors">
            {action.icon}
          </div>
          <span className="font-montserrat font-bold text-[#1b4d3e] text-sm text-center uppercase tracking-tight">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};
