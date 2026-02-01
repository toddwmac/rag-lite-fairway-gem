import React from 'react';
import { Monitor, Wifi, Activity, AlertTriangle, HelpCircle, Power } from 'lucide-react';

interface QuickActionsProps {
  onAction: (prompt: string) => void;
  disabled?: boolean;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onAction, disabled }) => {
  const actions = [
    {
      id: 'projector',
      icon: <Monitor size={32} />,
      label: 'Screen / Projector Issues',
      prompt: 'My projector screen is frozen, black, or showing the wrong image. How do I fix the display settings?'
    },
    {
      id: 'connection',
      icon: <Wifi size={32} />,
      label: 'TrackMan Not Connecting',
      prompt: 'The TrackMan unit is not connecting or the green light is off. How do I reboot it?'
    },
    {
      id: 'shots',
      icon: <Activity size={32} />,
      label: 'Shots Not Registering',
      prompt: 'I am hitting shots but the simulator is not picking them up. What should I check?'
    },
    {
      id: 'software',
      icon: <AlertTriangle size={32} />,
      label: 'Software Frozen / Crash',
      prompt: 'The TPS software is frozen or crashed. How do I force restart it safely?'
    },
    {
      id: 'putting',
      icon: <HelpCircle size={32} />,
      label: 'Putting Issues',
      prompt: 'Putting seems inaccurate or hard to aim. How do I calibrate for putting?'
    },
     {
      id: 'pc',
      icon: <Power size={32} />,
      label: 'PC / System Reboot',
      prompt: 'How do I properly reboot the entire PC and system?'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {actions.map((action) => (
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
