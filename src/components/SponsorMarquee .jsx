import React from 'react';
import { motion } from 'framer-motion';

const SponsorMarquee = () => {
  // Sponsor logos - duplicated for seamless loop
  const sponsors = [
    { name: 'Luminus', logo: 'luminus' },
    { name: 'Brembo', logo: 'brembo' },
    { name: 'Motorola', logo: 'motorola' },
    { name: 'Luminus', logo: 'luminus' },
    { name: 'Brembo', logo: 'brembo' }
  ];

  // Duplicate sponsors array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="relative w-full  py-12 md:py-16 lg:py-20 overflow-hidden m-0 p-0">
      
      {/* Gradient Overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a2e]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0a0a0a] via-[#1a1a2e]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-12 md:gap-16 lg:gap-24"
          animate={{
            x: [0, -1800], // Adjust based on content width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group cursor-pointer">
                {/* Logo Container */}
                <div className="flex items-center gap-3 px-6 py-4">
                  
                  {/* Custom SVG Logos */}
                  {sponsor.logo === 'luminus' && (
                    <div className="flex items-center gap-2">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/80 group-hover:text-white transition-colors">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="currentColor" opacity="0.6"/>
                        <circle cx="20" cy="20" r="4" fill="currentColor"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white text-2xl font-semibold transition-colors">
                        luminus
                      </span>
                    </div>
                  )}

                  {sponsor.logo === 'brembo' && (
                    <div className="flex items-center gap-2">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/80 group-hover:text-white transition-colors">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="15" cy="20" r="5" fill="currentColor" opacity="0.6"/>
                        <circle cx="25" cy="20" r="5" fill="currentColor" opacity="0.6"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white text-2xl font-semibold transition-colors">
                        brembo
                      </span>
                    </div>
                  )}

                  {sponsor.logo === 'motorola' && (
                    <div className="flex items-center gap-2">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/80 group-hover:text-white transition-colors">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M20 8 L28 20 L20 32 L12 20 Z" fill="currentColor" opacity="0.6"/>
                      </svg>
                      <span className="text-white/80 group-hover:text-white text-2xl font-semibold transition-colors">
                        motorola
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SponsorMarquee;