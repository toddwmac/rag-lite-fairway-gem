'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useState } from 'react';
import { KioskHeader } from '@/components/KioskHeader';
import { QuickActions } from '@/components/QuickActions';
import { ChatInterface } from '@/components/ChatInterface';

// Hardcoded persona for the kiosk - reliable and consistent
const KIOSK_PERSONA = `You are the Private Fairway Support Assistant. 
Your goal is to troubleshoot golf simulator issues quickly and accurately using the provided Standard Operating Procedures (SOPs).
- Be concise. Give step-by-step instructions.
- Use bold text for key buttons or menu items (e.g. **Settings** > **About**).
- If the user reports a critical hardware failure (smoke, sparks, physical damage), tell them to Stop immediately and call the emergency number: 555-0199.
- Do not mention "files" or "documents". Just provide the answer.`;

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  
  const { 
    messages, 
    append, 
    setMessages,
    input,
    setInput,
    isLoading, 
    error 
  } = useChat({
    onError: (err) => {
      console.error('AI_SDK_ERROR:', err);
    }
  });

  // 1. Initialize and Auto-Select All Files
  useEffect(() => {
    setMounted(true);
    fetch('/api/files')
      .then(res => res.json())
      .then(data => {
        if (data.files) {
          setFiles(data.files);
        }
      })
      .catch(err => console.error('Error fetching files:', err));
  }, []);

  const handleQuickAction = async (prompt: string) => {
    // Send the prompt immediately
    await append({
      content: prompt,
      role: 'user'
    }, {
      body: { 
        selectedFiles: files, // ALWAYS send all files
        customInstructions: KIOSK_PERSONA
      }
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    await append({
      content: input,
      role: 'user'
    }, {
      body: { 
        selectedFiles: files, // ALWAYS send all files
        customInstructions: KIOSK_PERSONA
      }
    });
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col h-screen bg-[#f9f8f4] font-sans text-[#1a1a1a]">
      <KioskHeader onReset={handleReset} />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* If chat is empty, show the Quick Actions Menu */}
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
            <div className="max-w-4xl w-full space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-montserrat font-bold text-[#1b4d3e]">How can we help?</h2>
                <p className="text-[#1b4d3e]/60">Select a common issue below to start troubleshooting.</p>
              </div>
              
              <QuickActions onAction={handleQuickAction} disabled={isLoading || files.length === 0} />
              
              <div className="max-w-2xl mx-auto w-full pt-8 border-t border-[#1b4d3e]/10">
                 <p className="text-center text-sm font-bold text-[#1b4d3e] mb-2 uppercase tracking-widest">Or describe the problem</p>
                 <form onSubmit={handleSubmit} className="relative">
                    <input 
                      className="w-full p-4 rounded-xl border-2 border-[#1b4d3e]/20 focus:border-[#c5a059] outline-none bg-white text-lg shadow-sm"
                      placeholder="e.g., 'The ball is not flying straight...'"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                 </form>
              </div>
            </div>
          </div>
        ) : (
          /* Once chat starts, show the full interface */
          <ChatInterface 
            messages={messages}
            isLoading={isLoading}
            input={input}
            onInputChange={setInput}
            onSubmit={handleSubmit}
          />
        )}
      </main>

      {/* Global Styles for Branding */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        
        body {
          background-color: #f9f8f4;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}