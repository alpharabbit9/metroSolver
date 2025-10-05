import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const MeetAgentsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Agency', 'Creative', 'Leadership', 'Growth Marketing', 'Technology'];

  const agents = [
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&q=80' },
    { name: 'Ayesha Siddiqui', role: 'Co-founder, Leader', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=500&fit=crop&q=80' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen ] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Meet Our Agents
          </h1>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Agents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Container */}
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card with gradient border */}
                <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-purple-400/50 via-pink-400/50 to-purple-400/50">
                  <div className="rounded-2xl overflow-hidden bg-[#1a1229]">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1229] via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5 relative">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {agent.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {agent.role}
                          </p>
                        </div>
                        
                        {/* Checkmark icon */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MeetAgentsSection;