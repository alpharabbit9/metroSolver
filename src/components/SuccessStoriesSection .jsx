import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, TrendingUp, DollarSign } from 'lucide-react';

const SuccessStoriesSection = () => {
  const [activeTab, setActiveTab] = useState('Success Stories');

  const tabs = ['Success Stories', 'Case Studies', 'Blog and News'];

  const stories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company, highlight your mission, core expertise.',
      views: '99M+ Views',
      ctr: '39% Lower CPA',
      revenue: '$24T+ Sales Generated'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company, highlight your mission, core expertise.',
      views: '99M+ Views',
      ctr: '39% Lower CPA',
      revenue: '$24T+ Sales Generated'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company, highlight your mission, core expertise.',
      views: '99M+ Views',
      ctr: '39% Lower CPA',
      revenue: '$24T+ Sales Generated'
    }
  ];

  return (
    <section className="relative  py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Success Stories,
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Case Studies & Blog
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Based on the description of Metro Solver and the image content, here is a 
            knowledgeable that Metro Solver uses to scale customer's business
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 border border-purple-500/50'
                  : 'bg-gradient-to-r from-[#2a1a3e]/60 to-[#1a0f2e]/80 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-[#2a1a3e]/60 to-[#1a0f2e]/80 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {story.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {story.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span>{story.views}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>{story.ctr}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span>{story.revenue}</span>
                  </div>
                </div>

                {/* Gradient Line */}
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-4" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#2a1a3e]/60 to-[#1a0f2e]/80 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 border border-purple-500/50"
          >
            View More
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0820] to-transparent pointer-events-none" />
    </section>
  );
};

export default SuccessStoriesSection;