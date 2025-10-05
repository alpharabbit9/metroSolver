// components/ChatbotWidget.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import icon from '../assets/Frame 3.gif'
import { img } from "framer-motion/client";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6   text-white p-4 rounded-full shadow-lg z-50 transition"
      >
        <img className="w-20" src={icon} alt="" />
      </button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 h-[450px] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white rounded-2xl shadow-xl border p-3 flex flex-col z-50"
          >
            <div className="flex justify-between items-center mb-2 border-b pb-2">
              <h3 className="font-semibold ">Chat with AI</h3>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 text-sm ">
              {/* Replace this with your real chatbot component */}
              <p>👋 Hi! How can I help you today?</p>
            </div>

            <div className="mt-2 flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-l-lg px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-3 rounded-r-lg">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
