import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, PlayIcon } from 'lucide-react';

const PodcastSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const podcasts = [
    {
      id: 1,
      title: 'How Brands Can Prepare for Black Friday & Christmas',
      duration: '50 Mins',
      date: 'Mar 11, 2025',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'How Brands Can Prepare for Black Friday & Christmas',
      duration: '30 Mins',
      date: 'Mar 11, 2025',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies for 2025',
      duration: '45 Mins',
      date: 'Mar 10, 2025',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'The Future of E-Commerce',
      duration: '40 Mins',
      date: 'Mar 9, 2025',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 2
  };

  const [itemsToShow, setItemsToShow] = useState(2);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(podcasts.length / itemsToShow) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visiblePodcasts = podcasts.slice(
    currentIndex * itemsToShow,
    (currentIndex + 1) * itemsToShow
  );

  return (
    <div className="min-h-screen  py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-6"
        >
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Did You Hear about<br />Our Podcast?
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-md lg:text-right"
          >
            Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Podcast Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visiblePodcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                      <img
                        src={podcast.image}
                        alt={podcast.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                        
                        {/* Top Badges */}
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2"
                          >
                            <Clock className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">
                              {podcast.duration}
                            </span>
                          </motion.div>
                          
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2"
                          >
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">
                              {podcast.date}
                            </span>
                          </motion.div>
                        </div>

                        {/* Bottom Content */}
                        <div>
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white text-xl md:text-2xl font-bold leading-tight"
                          >
                            {podcast.title}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Play Button Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
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
                          className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center shadow-2xl"
                        >
                            <PlayIcon color='white'/>
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                        </motion.div>
                      </motion.div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-purple-500 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-purple-500 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Decorative Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"
        />
      </div>
    </div>
  );
};

export default PodcastSection;