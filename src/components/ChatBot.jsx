import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Minus, X, Paperclip } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Welcome our Agency.', time: '2:50 PM', status: 'Seen' },
    { id: 2, sender: 'user', text: 'Hello', time: '2:21 PM', status: 'Seen' },
    { id: 3, sender: 'bot', text: 'Welcome our Agency.', time: '2:30 PM', status: 'Seen' },
    { id: 4, sender: 'user', text: 'Hello', time: '2:23 PM', status: 'Delivery' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputText,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        status: 'Delivery'
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'bot',
          text: 'Thank you for your message. How can I help you today?',
          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
          status: 'Seen'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 p-4">
      {/* Mobile Chat Container */}
      <div className="w-full max-w-md h-[700px] bg-[#0a0e1a] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a1f35] to-[#0f1320] px-5 py-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-base">Chat with AI</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Minus className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-1"
              >
                {message.sender === 'bot' ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-semibold">AI</span>
                      </div>
                      <span className="text-white text-sm font-medium">Customer Support</span>
                      <span className="text-gray-500 text-xs ml-auto">{message.time}</span>
                    </div>
                    <div className="ml-9">
                      <div className="inline-block bg-gradient-to-br from-purple-600 to-purple-800 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <div className="text-gray-500 text-xs mt-1 text-right pr-2">{message.status}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-end items-center gap-2 mb-2">
                      <span className="text-gray-500 text-xs">{message.time}</span>
                    </div>
                    <div className="flex justify-end">
                      <div>
                        <div className="inline-block bg-gradient-to-br from-[#2a3142] to-[#1f2532] text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <div className="text-gray-500 text-xs mt-1 text-right pr-2">{message.status}</div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="bg-[#0f1320] px-4 py-4 border-t border-gray-800">
          <div className="flex items-center gap-3 bg-[#1a1f35] rounded-full px-4 py-3 border border-gray-700">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type here..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            <button 
              onClick={handleSend}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;