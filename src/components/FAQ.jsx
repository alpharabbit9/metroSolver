import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import map from '../assets/map.png'

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    'Digital Marketing',
    'Web & Software Development',
    'Graphic Design & Logo',
    'Multimedia & Video Editing',
    'Creative Writing Solutions',
    'E-Commerce Solutions',
    'Refund, Earn & Cancel Policies',
    'Getting Started & General Info',
    'General Policies & Customer Support'
  ];

  const faqs = {
    'Digital Marketing': [
      {
        question: 'What services do you offer in digital marketing?',
        answer: 'We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.'
      },
      {
        question: 'How can digital marketing help my business?',
        answer: 'Digital marketing increases your online visibility, drives targeted traffic, and helps convert visitors into customers through strategic campaigns.'
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We track key metrics including ROI, conversion rates, engagement rates, traffic growth, and other KPIs specific to your goals.'
      },
      {
        question: 'Do you offer local SEO?',
        answer: 'Yes, we specialize in local SEO to help businesses rank higher in local search results and attract nearby customers.'
      }
    ]
  };

  const locations = [
    { id: 1, top: '28%', left: '8%', country: 'North America' },
    { id: 2, top: '35%', left: '48%', country: 'Europe' },
    { id: 3, top: '75%', left: '15%', country: 'South America' },
    { id: 4, top: '72%', left: '83%', country: 'Asia Pacific' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Head office: Metro Solver Limited Grantham Road, London E12 5LX, United Kingdom' },
    { icon: Phone, text: '+447936 455446' },
    { icon: Phone, text: '+8801644562025' },
    { icon: MessageSquare, text: '02064484' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0a0515] via-[#0f0820] to-[#1a0f2e] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {/* Left Side - Title and Categories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Got Questions?
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
              We've got Answers
            </h3>

            <div className="space-y-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === category
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activeCategory === category ? 'bg-purple-500' : 'bg-gray-600'
                  }`} />
                  <span className="text-sm sm:text-base">{category}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs[activeCategory]?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a0f2e]/60 to-[#2a1a3e]/40 rounded-xl border border-purple-500/20 overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-400 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map Section */}

      <div className='flex justify-center item-center rounded-3xl'>
          <img className='w-full object-contain rounded-3xl' src={map} alt="" />
      </div>
       
      </div>

    
    </section>
  );
};

export default FAQ;