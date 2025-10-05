import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MetroSolverSection = () => {
  const features = [
    { text: 'Cancel Anytime', delay: 0.2 },
    { text: '24/7 Customer Service', delay: 0.3 },
    { text: 'Refers & Earn', delay: 0.4 },
    { text: 'Money Back Guarantee', delay: 0.5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Why You Choose Metro Solver?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed"
          >
            We are constantly growing or seeking and improving. Enter your personal and credit card, where looking to build more is comfortable where it's possible.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 border-none text-white px-8 py-3 rounded-full text-sm md:text-base shadow-lg shadow-purple-500/30"
          >
            ⚡ Book Now
          </motion.button>
        </motion.div>

        {/* Right Section - Features & Video */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-end space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.05, x: -5 }}
                className={`
                  px-6 py-3 rounded-full text-white font-medium text-sm md:text-base
                  ${index === 1 
                    ? 'bg-gradient-to-r from-purple-700 to-violet-700 shadow-lg shadow-purple-500/40' 
                    : 'bg-[#2a1f3d] hover:bg-[#362949]'
                  }
                  transition-all duration-300 cursor-pointer
                  w-fit
                `}
              >
                {feature.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            
            {/* Play Button Overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 200 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(139, 92, 246, 0.7)',
                    '0 0 0 20px rgba(139, 92, 246, 0)',
                    '0 0 0 0 rgba(139, 92, 246, 0)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-full p-6 md:p-8 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
              </motion.button>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MetroSolverSection;