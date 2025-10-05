import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Monitor, 
  Video, 
  Megaphone, 
  Lightbulb, 
  Search,
  Box,
  ShoppingCart,
  DollarSign,
  Layers,
  Globe,
  Shield,
  Network,
  Shirt,
  GraduationCap,
  ArrowRight,
  X
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Monitor,
      title: 'Web & Software Development',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Video,
      title: 'Multimedia & Video Editing',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Lightbulb,
      title: 'Creative Writing Solution',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Box,
      title: '3D Animation & Visualization',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solution',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: DollarSign,
      title: 'Accounting',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Layers,
      title: 'Special Combo',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Globe,
      title: 'Premium Website',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Shield,
      title: 'Premium Domains',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Network,
      title: 'Proxy',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: Shirt,
      title: 'Merchandise',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    },
    {
      icon: GraduationCap,
      title: 'Academy',
      description: 'We are constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is',
      link: 'Read More',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 md:px-8 lg:px-12">
      
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-between max-w-xs mx-auto mb-12"
      >
        <span className="text-sm font-medium">Get My 15% OFF</span>
        <button className="hover:opacity-70 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our Services
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full"
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-6">
            Enter now constantly growing or learning and improving Enter your personal and estate tax csrff usry, where finding the ideal home is effortless and comfortable with our milestone.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`
                  group relative p-6 rounded-2xl backdrop-blur-sm
                  transition-all duration-300 cursor-pointer
                  ${service.featured 
                    ? 'bg-gradient-to-br from-purple-900/40 to-purple-700/30 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                  }
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-4
                    ${service.featured 
                      ? 'bg-gradient-to-br from-purple-600 to-violet-600' 
                      : 'bg-white/10 group-hover:bg-purple-600/20'
                    }
                  `}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium group/link"
                  whileHover={{ x: 5 }}
                >
                  {service.link}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/10 group-hover:to-violet-600/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;