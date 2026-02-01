import React, { useRef, useEffect } from 'react';
import { Send, User, Loader2, Bot } from 'lucide-react';
import { Message } from 'ai/react';
import ReactMarkdown from 'react-markdown';

interface ChatInterfaceProps {
  messages: any[];
  isLoading: boolean;
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  messages, 
  isLoading, 
  input, 
  onInputChange, 
  onSubmit 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full bg-[#f9f8f4]">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
            <Bot size={64} className="text-[#1b4d3e] mb-4" />
            <h2 className="text-xl font-montserrat font-bold text-[#1b4d3e]">Ready to Assist</h2>
            <p className="text-sm text-[#1b4d3e]">Select an issue below or type your question.</p>
          </div>
        )}
        
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border ${
              m.role === 'user' 
                ? 'bg-[#1b4d3e] text-[#c5a059] border-[#1b4d3e]' 
                : 'bg-white text-[#1b4d3e] border-[#c5a059]'
            }`}>
              {m.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            
            <div className={`max-w-[85%] px-6 py-5 rounded-3xl text-base leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-[#1b4d3e] text-white rounded-tr-none' 
                : 'bg-white text-[#1a1a1a] border border-[#1b4d3e]/10 rounded-tl-none'
            }`}>
              <ReactMarkdown
                components={{
                  strong: ({node, ...props}) => <span className="font-bold text-inherit" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 my-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 space-y-2 my-2" {...props} />,
                  li: ({node, ...props}) => <li className="pl-1" {...props} />,
                  p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                  a: ({node, ...props}) => <a className="underline font-semibold hover:text-[#c5a059]" target="_blank" rel="noopener noreferrer" {...props} />,
                }}
              >
                {m.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-white border border-[#c5a059] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Loader2 size={20} className="animate-spin text-[#1b4d3e]" />
             </div>
             <div className="bg-white border border-[#1b4d3e]/10 px-6 py-5 rounded-3xl rounded-tl-none shadow-sm">
               <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-[#1b4d3e] rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-[#1b4d3e] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-[#1b4d3e] rounded-full animate-bounce [animation-delay:0.4s]" />
               </div>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-[#1b4d3e]/10">
        <form onSubmit={onSubmit} className="relative max-w-4xl mx-auto flex items-center gap-3">
          <input
            className="flex-1 pl-6 pr-4 py-4 rounded-xl bg-[#f9f8f4] border-2 border-transparent focus:border-[#c5a059] focus:bg-white outline-none transition-all text-lg placeholder:text-[#1b4d3e]/30 text-[#1b4d3e]"
            value={input}
            placeholder="Describe your issue..."
            onChange={(e) => onInputChange(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-4 bg-[#1b4d3e] text-[#c5a059] rounded-xl hover:bg-[#143d31] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
          >
            {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
          </button>
        </form>
      </div>
    </div>
  );
};
