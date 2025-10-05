import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import chatBot from '../assets/Frame 3.gif'

const Banner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0515] via-[#130a24] to-[#1a0f2e] overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0515]/80 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white">Expert to</span>
                <br />
                <span className="text-white">Digitalise Your</span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Growth
                </motion.span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We are constantly growing or learning and improving. Enter your the personal real estate sanct uary, where finding the ideal home is
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span>Explore Now</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>

          {/* Right Animation - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Animated Video */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full scale-75" />
              
              {/* Video container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-full h-full max-w-3xl"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{ filter: 'contrast(1.2) brightness(1.1)' }}
                >
                  <source src="/src/assets/v.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>

            {/* Floating Chat Bot Icon */}
            <motion.div
              className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 lg:bottom-16 lg:right-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50" />
                
                {/* Icon container */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20  rounded-full flex items-center justify-center shadow-2xl ">
                  {/* Discord-style bot icon */}
                 <img src={chatBot} alt="" />
                  
                  {/* Notification dot */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0a0515]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0515] to-transparent" />
    </section>
  );
};

export default Banner;