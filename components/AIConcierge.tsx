import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToStylist } from '../services/geminiService';
import { ChatMessage, FetchStatus } from '../types';

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Bonjour. I am Élise, your personal stylist at Lumière & Ombre. How may I assist you in finding the perfect piece today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || status === FetchStatus.LOADING) return;

    const userText = input.trim();
    setInput('');
    
    // Add user message
    const userMessage: ChatMessage = { role: 'user', text: userText, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setStatus(FetchStatus.LOADING);

    try {
      const responseText = await sendMessageToStylist(userText);
      const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
      setStatus(FetchStatus.SUCCESS);
    } catch (error) {
      setStatus(FetchStatus.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-lux-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
        <span className="hidden group-hover:inline text-sm tracking-widest font-sans">ASK STYLIST</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-96 bg-white shadow-2xl rounded-xl border border-stone-100 overflow-hidden transition-all duration-500 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-lux-black p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center text-white font-serif italic">
              É
            </div>
            <div>
              <h3 className="text-white font-serif text-sm tracking-wider">Élise</h3>
              <p className="text-gold-400 text-xs uppercase tracking-widest">Personal Stylist</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-stone-50 no-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm font-sans leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gray-200 text-lux-black rounded-br-none'
                    : 'bg-lux-black text-cream rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {status === FetchStatus.LOADING && (
            <div className="flex justify-start mb-4">
              <div className="bg-stone-100 p-3 rounded-lg rounded-bl-none flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin text-gold-600" />
                 <span className="text-xs text-gray-500 italic">Consulting the catalogue...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="I need a bag for a gala..."
            className="flex-1 bg-stone-50 border-none outline-none text-sm p-2 text-lux-black placeholder-gray-400 focus:ring-1 focus:ring-gold-200 rounded"
          />
          <button 
            onClick={handleSend}
            disabled={status === FetchStatus.LOADING || !input.trim()}
            className="p-2 text-lux-black hover:text-gold-600 disabled:opacity-50 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};