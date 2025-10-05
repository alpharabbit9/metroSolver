import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  // Format number for display
  const formatNumber = (num) => {
    if (end >= 1000) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1) + 'k';
    }
    return num;
  };

  return (
    <span ref={ref}>
      {end >= 1000 ? formatNumber(displayValue) : displayValue}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 150, label: 'Current Clients', suffix: '+' },
    { number: 25000, label: 'Completed Projects', suffix: '+' },
    { number: 90, label: 'Metro Solver Teams', suffix: '+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative min-h-[400px]  py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group p-3 bg-[#251438] rounded-3xl backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stat Number */}
              <div className="mb-4">
                <motion.h2 
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                  />
                </motion.h2>
                <motion.span
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text ml-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {stat.suffix}
                </motion.span>
              </div>

              {/* Stat Label */}
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              >
                {stat.label}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="mt-6 mx-auto w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent pointer-events-none" />
    </div>
  );
};

export default StatsSection;