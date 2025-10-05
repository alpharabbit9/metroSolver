import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutHeroSection = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-white"
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Unveiling the Essence<br />Of Our Metro Solver
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              />
            </motion.div>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed"
            >
              <p>
                Welcome to Metro Solver, where creativity meets strategy, and brands come to life. We are not just a branding agency; we are architects of identity, storytellers of success, and partners in your business journey. Metro Solver is a hub of innovative minds, passionate about turning concepts into captivating brand experiences.
              </p>
              
              <p>
                At Path our overarching goal is to redefine industry standards by providing a dynamic and adaptive HR and CRM SaaS platform. We aim to empower businesses of all sizes to optimise their operations, foster employee growth, and cultivate enduring customer relationships.
              </p>
            </motion.div>

            {/* Book Now Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-b from-[#6331F1] via-[#8B57F4] to-[#8C57F5] hover:from-purple-700 hover:to-violet-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Book Now
            </motion.button>

            
          </motion.div>

          {/* Right Side - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20"
              style={{ perspective: '1000px' }}
            >
              {/* Image */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                  alt="Metro Solver Team"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                
                {/* Animated Border Glow */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 border-2 border-purple-500/50 rounded-3xl pointer-events-none"
                />
              </div>

              {/* Floating Elements Inside Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Glow Effects */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -z-10"
            />
            
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-600/30 rounded-full blur-3xl -z-10"
            />

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;