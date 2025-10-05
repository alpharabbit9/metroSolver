import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const LatestWorksSection = () => {
  const works = [
    {
      id: 1,
      title: 'Build Your Brand Pack',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634942537571-04c0d4f6f25d?w=600&h=400&fit=crop',
      size: 'large',
      color: 'from-red-600 to-orange-500'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop',
      size: 'tall',
      color: 'from-purple-600 to-blue-500'
    },
    {
      id: 3,
      title: 'Leadership Summit',
      category: 'Event Design',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-orange-600 to-red-500'
    },
    {
      id: 4,
      title: 'Cloud Partner Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-slate-700 to-slate-900'
    },
    {
      id: 5,
      title: 'The Perfect Home',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 6,
      title: 'Cybertruck',
      category: 'Product Design',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 7,
      title: 'Digital Art NFTs',
      category: 'Crypto Art',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop',
      size: 'tall',
      color: 'from-yellow-400 to-lime-500'
    },
    {
      id: 8,
      title: 'NFT Agency',
      category: 'Web3',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=400&fit=crop',
      size: 'large',
      color: 'from-purple-900 to-black'
    },
    {
      id: 9,
      title: 'Crypto Gaming',
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      id: 10,
      title: 'Hot Trending This Week',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-slate-800 to-slate-950'
    },
    {
      id: 11,
      title: 'UI/UX Design Services',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      size: 'large',
      color: 'from-indigo-900 to-purple-900'
    },
    {
      id: 12,
      title: 'Crypto Investment',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=600&fit=crop',
      size: 'tall',
      color: 'from-green-900 to-emerald-950'
    },
    {
      id: 13,
      title: 'Tag List Dashboard',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-slate-700 to-slate-900'
    },
    {
      id: 14,
      title: 'Analytics Platform',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-lime-600 to-green-700'
    },
    {
      id: 15,
      title: 'Healthcare Platform',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      size: 'large',
      color: 'from-blue-900 to-indigo-950'
    },
    {
      id: 16,
      title: 'Fintech Experts',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-slate-800 to-slate-950'
    },
    {
      id: 17,
      title: 'Music Platform',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 18,
      title: 'Sports Analytics',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=600&fit=crop',
      size: 'tall',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 19,
      title: 'Evolution of Mind',
      category: 'Editorial',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      size: 'medium',
      color: 'from-slate-700 to-black'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Latest Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </div>
          
          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Based on the description of Metro Solver and the image provided, here is a success page that Metro Solver uses to scale a customer's business
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className={`
                    w-full object-cover transition-transform duration-500 group-hover:scale-110
                    ${work.size === 'tall' ? 'h-96' : work.size === 'large' ? 'h-72' : 'h-64'}
                  `}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  
                  {/* Top Right Icon */}
                  <div className="flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <span className="text-white text-xs font-medium">
                        {work.category}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-white text-xl font-bold">
                      {work.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#2a1a3e]/60 to-[#1a0f2e]/80 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestWorksSection;