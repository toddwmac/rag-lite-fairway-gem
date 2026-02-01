import { Monitor, Wifi, Activity, AlertTriangle, HelpCircle, Power } from 'lucide-react';
import React from 'react';

export interface QuickActionItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  prompt: string;
}

export const QUICK_ACTIONS: QuickActionItem[] = [
  {
    id: 'projector',
    icon: React.createElement(Monitor, { size: 32 }),
    label: 'Screen / Projector Issues',
    prompt: 'My projector screen is frozen, black, or showing the wrong image. How do I fix the display settings?'
  },
  {
    id: 'connection',
    icon: React.createElement(Wifi, { size: 32 }),
    label: 'TrackMan Not Connecting',
    prompt: 'The TrackMan unit is not connecting or the green light is off. How do I reboot it?'
  },
  {
    id: 'shots',
    icon: React.createElement(Activity, { size: 32 }),
    label: 'Shots Not Registering',
    prompt: 'I am hitting shots but the simulator is not picking them up. What should I check?'
  },
  {
    id: 'software',
    icon: React.createElement(AlertTriangle, { size: 32 }),
    label: 'Software Frozen / Crash',
    prompt: 'The TPS software is frozen or crashed. How do I force restart it safely?'
  },
  {
    id: 'putting',
    icon: React.createElement(HelpCircle, { size: 32 }),
    label: 'Putting Issues',
    prompt: 'Putting seems inaccurate or hard to aim. How do I calibrate for putting?'
  },
  {
    id: 'pc',
    icon: React.createElement(Power, { size: 32 }),
    label: 'PC / System Reboot',
    prompt: 'How do I properly reboot the entire PC and system?'
  }
];
