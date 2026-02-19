
import React, { useState, useRef, useEffect } from 'react';
import { getAITutorResponse } from '../services/gemini';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  courseTitle: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ courseTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAITutorResponse(input, courseTitle);
    const aiMsg: ChatMessage = { role: 'model', text: response };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-emerald-500/30">
          <div className="bg-emerald-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot text-white"></i>
              <span className="font-semibold text-white">AI Tutor Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 text-sm mt-10">
                Halo! Ada yang bisa saya bantu terkait materi <strong>{courseTitle}</strong>?
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-700 bg-slate-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-emerald-600 hover:bg-emerald-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group relative"
        >
          <i className="fas fa-robot text-xl"></i>
          <span className="absolute right-full mr-4 bg-emerald-600 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Butuh bantuan AI?
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
