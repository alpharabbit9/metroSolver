import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { number: '150', suffix: '+', label: 'Current Clients' },
    { number: '25k', suffix: '+', label: 'Completed Projects' },
    { number: '90', suffix: '+', label: 'Metro Solver Teams' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Katie Johnson',
      role: 'Founder of Strova',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      review: '"Metro Solver with Miaer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
      platform: 'Google',
      platformText: 'Review by google',
      color: 'yellow'
    },
    {
      id: 2,
      name: 'Wade Warren',
      role: 'Founder of Strova',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      review: '"Metro Solver with Miaer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
      platform: 'Trustpilot',
      platformText: 'Review by Trustpilot',
      color: 'cyan'
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      role: 'Founder of Strova',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      review: '"Metro Solver with Miaer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
      platform: 'Google',
      platformText: 'Review by google',
      color: 'yellow'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0a0515] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-3 rounded-3xl bg-[#231236]"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-3"
              >
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                  {stat.number}
                </span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </motion.div>
              <p className="text-gray-300 text-base sm:text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* What People Say Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Based on the description of Metro Solver and the image provided, here is a 
            4-step process that Metro Solver uses to scale a customer's business
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  testimonial.color === 'yellow'
                    ? 'bg-gradient-to-br from-[#2a1a3e]/80 to-[#1a0f2e]/60 border-purple-500/30 hover:border-purple-500/50'
                    : 'bg-gradient-to-br from-purple-900/40 to-[#1a0f2e]/60 border-cyan-500/30 hover:border-cyan-500/50'
                }`}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 fill-current ${
                            testimonial.color === 'yellow' ? 'text-yellow-400' : 'text-cyan-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {testimonial.review}
                </p>

                {/* Platform Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  testimonial.color === 'yellow'
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                    : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'
                }`}>
                  <Star className={`w-4 h-4 ${
                    testimonial.color === 'yellow' ? 'text-yellow-400' : 'text-cyan-400'
                  }`} />
                  <span className="text-white">{testimonial.platform}</span>
                  <span className="text-gray-400 text-xs">| {testimonial.platformText}</span>
                </div>

                {/* Background glow effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  testimonial.color === 'yellow'
                    ? 'bg-gradient-to-br from-purple-600/5 to-transparent'
                    : 'bg-gradient-to-br from-cyan-600/5 to-transparent'
                }`} />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 sm:mt-12">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[#28303F] text-white flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/30 border border-purple-500/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/80 to-gray-500/80 text-white flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/30 border border-purple-500/30"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0515] to-transparent pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;