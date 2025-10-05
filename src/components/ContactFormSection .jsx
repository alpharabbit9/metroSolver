import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Frame_1.gif'
import { 
  Send, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Github
} from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877f2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#e4405f' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1da1f2' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#ff0000' },
    { icon: Github, href: '#', label: 'GitHub', color: '#333' }
  ];

  return (
    <div className="min-h-screen  py-16 px-4 md:px-8 lg:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <img className='w-20' src={logo} alt="" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0  blur-xl -z-10"
                />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Still Have<br />A Questions?
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-4 mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-purple-900/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-purple-300 hover:text-white border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-purple-500/20 shadow-2xl">
              <div className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="text-white text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      className="w-full bg-purple-950/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email..."
                      className="w-full bg-purple-950/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="text-white text-sm font-medium mb-2 block">
                      WhatsApp/Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your number..."
                      className="w-full bg-purple-950/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Service Select */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="text-white text-sm font-medium mb-2 block">
                      Which one You Looking for Support in?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-purple-950/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-purple-950">Choose services</option>
                      <option value="web" className="bg-purple-950">Web Development</option>
                      <option value="design" className="bg-purple-950">UI/UX Design</option>
                      <option value="marketing" className="bg-purple-950">Digital Marketing</option>
                      <option value="seo" className="bg-purple-950">SEO Services</option>
                      <option value="other" className="bg-purple-950">Other</option>
                    </select>
                  </motion.div>
                </div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="text-white text-sm font-medium mb-2 block">
                    How Can We Help?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message goes in here..."
                    rows="5"
                    className="w-full bg-purple-950/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-b from-[#6331F1] via-[#8B57F4] to-[#8C57F5] hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-purple-500/30 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </div>

            {/* Decorative Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;