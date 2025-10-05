import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Phone, 
  Package, 
  ClipboardCheck, 
  Settings, 
  Headphones 
} from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: '01',
      title: 'Book a Call',
      icon: Phone,
      position: 'top-right',
      angle: 45
    },
    {
      id: '02',
      title: 'Requirement Analysis',
      icon: ClipboardCheck,
      position: 'right',
      angle: 90
    },
    {
      id: '03',
      title: 'Service Customisation',
      icon: Headphones,
      position: 'bottom-right',
      angle: 135
    },
    {
      id: '04',
      title: 'Implement & Develop',
      icon: Settings,
      position: 'bottom-left',
      angle: 225
    },
    {
      id: '05',
      title: 'Quality Assurance',
      icon: Package,
      position: 'left',
      angle: 270
    },
    {
      id: '06',
      title: 'Delivery and Support',
      icon: Truck,
      position: 'top-left',
      angle: 315
    }
  ];

  const getPositionClasses = (position) => {
    const positions = {
      'top-right': 'top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-24',
      'right': 'top-1/2 -translate-y-1/2 right-8 md:right-12 lg:right-16',
      'bottom-right': 'bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-24',
      'bottom-left': 'bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-24',
      'left': 'top-1/2 -translate-y-1/2 left-8 md:left-12 lg:left-16',
      'top-left': 'top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-24'
    };
    return positions[position] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0515] via-[#1a0a2e] to-[#0a0515] py-16 px-4 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full relative">
        
        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          >
            {/* Gradient Ring */}
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth="2"
                strokeDasharray="565"
                strokeDashoffset="0"
              />
            </svg>

            {/* Number Markers on Ring */}
            {steps.map((step, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 90;
              const x = 100 + radius * Math.cos(angle);
              const y = 100 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-8 h-8 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-purple-400">
                    {step.id}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-900/80 to-purple-950/80 backdrop-blur-xl rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center border-2 border-purple-500/30 shadow-2xl shadow-purple-500/50"
          >
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-white text-2xl md:text-3xl lg:text-4xl font-bold"
              >
                How
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-white text-sm md:text-base lg:text-lg"
              >
                to Works?
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Step Cards */}
        <div className="relative w-full h-[800px] md:h-[900px] lg:h-[1000px]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute ${getPositionClasses(step.position)}`}
              >
                <motion.div
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer min-w-[250px] md:min-w-[300px]"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-white text-lg md:text-xl font-bold mb-2">
                    {step.title}
                  </h4>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {step.id}
                  </div>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/10 group-hover:to-violet-600/10 transition-all duration-300 pointer-events-none"
                  />

                  {/* Connection Line Indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-50 -z-10"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-600/10 rounded-full blur-3xl -z-10"
        />
      </div>
    </div>
  );
};

export default HowItWorksSection;